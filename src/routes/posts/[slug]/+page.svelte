<script>
  import { page } from '$app/stores'
  import { getPostBySlug } from '$lib/posts.js'
  import { renderMarkdown } from '$lib/markdown.js'

  let post
  $: post = getPostBySlug($page.params.slug)
  const pageTitle = () => post ? `${post.title} • Xenon` : 'Not found • Xenon'
  const pageDescription = () => post ? post.title : 'Post not found'
</script>

<svelte:head>
  <title>{pageTitle()}</title>
  <meta name="description" content={pageDescription()} />
</svelte:head>

{#if post}
  <article class="section">
    <div class="container" style="max-width: 760px">
      <header style="margin-bottom: 1.25rem">
        <h1 class="text-primary" style="margin: 0 0 .5rem 0; font-size: clamp(1.6rem, 3vw, 2.2rem)">{post.title}</h1>
        <time datetime={post.date.split('.').reverse().join('-')} style="color: var(--text-muted)">{post.date}</time>
      </header>
      <div class="prose" style="line-height: 1.75; color: var(--text-primary)">{@html renderMarkdown(post.content)}</div>
      <div style="margin-top: 2rem">
        <a class="btn btn-secondary" href="/posts">← Back to Posts</a>
      </div>
    </div>
  </article>
{:else}
  <section class="section">
    <div class="container">
      <h1 class="text-primary">Not found</h1>
      <p style="color: var(--text-secondary)">We couldn't find this post.</p>
      <a href="/posts" class="btn btn-secondary">Back to Posts</a>
    </div>
  </section>
{/if}


