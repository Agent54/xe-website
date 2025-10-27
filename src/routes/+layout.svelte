<script>
  import './styles.css'
  import { page } from '$app/stores'

  let brandName
  let brandLink
  let isDarc
  let currentPath
  $: {
    isDarc = $page.url.pathname.startsWith('/darc')
    brandName = isDarc ? 'Darc' : 'Xenon'
    brandLink = isDarc ? '/darc' : '/'
    currentPath = $page.url.pathname
  }

  function isActive(path) {
    if (path === '/') {
      return currentPath === '/'
    }
    return currentPath.startsWith(path)
  }
</script>

<div class:darc-theme={isDarc}>
  <header class="header">
    <div class="container header-inner">
      <a href={brandLink} class="brand">
        {#if isDarc}
          <img src="/photon_logo.png" alt="Darc logo" style="width: 36px; height: 36px; margin-right: 10px" />
        {/if}
        <span aria-label={brandName}>{brandName}</span>
      </a>
      <nav class="nav" aria-label="Primary">
        <a href="/" class:active={isActive('/')} aria-current={isActive('/') ? 'page' : undefined}>Xenon Framework</a>
        <a href="/darc" class:active={isActive('/darc')} aria-current={isActive('/darc') ? 'page' : undefined}>Darc Browser</a>
        <a href="/about" class:active={isActive('/about')} aria-current={isActive('/about') ? 'page' : undefined}>About Us</a>
        <a href="/posts" class:active={isActive('/posts')} aria-current={isActive('/posts') ? 'page' : undefined}>Posts</a>
        <a href="https://github.com/agent54" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </nav>
    </div>
  </header>

  <main class="min-h-screen">
    <slot />
  </main>
</div>