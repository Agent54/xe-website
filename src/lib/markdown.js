// Minimal markdown renderer for internal posts
// Supports: headings, paragraphs, unordered lists, inline code, code fences, emphasis, links

const escapeHtml = s => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

const renderInline = s => {
  // code spans
  s = s.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`)
  // bold, italic
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  // links [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
  return s
}

export const renderMarkdown = md => {
  if (!md) {
    return ''
  }

  const lines = md.replace(/\r\n?/g, '\n').split('\n')
  const out = []
  let inList = false
  let inCode = false
  let codeLang = ''
  let codeBuffer = []

  const flushParagraph = buf => {
    if (buf.length === 0) {
      return
    }
    const text = buf.join(' ').trim()
    if (text.length > 0) {
      out.push(`<p>${renderInline(text)}</p>`)
    }
    buf.length = 0
  }
  const paragraphBuffer = []

  for (const raw of lines) {
    const line = raw.trimEnd()

    if (inCode) {
      if (/^```/.test(line)) {
        out.push(`<pre><code${codeLang ? ` class=\"language-${codeLang}\"` : ''}>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`) 
        inCode = false
        codeLang = ''
        codeBuffer = []
      } else {
        codeBuffer.push(raw) // preserve indentation in code blocks
      }
      continue
    }

    if (/^```/.test(line)) {
      flushParagraph(paragraphBuffer)
      inCode = true
      codeLang = line.slice(3).trim()
      codeBuffer = []
      continue
    }

    if (line === '') {
      if (inList) {
        out.push('</ul>')
        inList = false
      }
      flushParagraph(paragraphBuffer)
      continue
    }

    const h = line.match(/^(#{1,3})\s+(.*)$/)
    if (h) {
      if (inList) {
        out.push('</ul>')
        inList = false
      }
      flushParagraph(paragraphBuffer)
      const level = h[1].length
      out.push(`<h${level}>${renderInline(h[2].trim())}</h${level}>`)
      continue
    }

    const li = line.match(/^[-*]\s+(.*)$/)
    if (li) {
      flushParagraph(paragraphBuffer)
      if (!inList) {
        out.push('<ul>')
        inList = true
      }
      out.push(`<li>${renderInline(li[1].trim())}</li>`)
      continue
    }

    paragraphBuffer.push(line)
  }

  if (inList) {
    out.push('</ul>')
  }
  if (inCode) {
    out.push(`<pre><code${codeLang ? ` class=\"language-${codeLang}\"` : ''}>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`) 
  }
  flushParagraph(paragraphBuffer)

  return out.join('\n')
}


