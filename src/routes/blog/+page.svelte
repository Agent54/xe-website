<script>
  import { posts } from '$lib/posts.js'
</script>

<svelte:head>
  <title>Blog • Xenon</title>
  <meta name="description" content="Updates and deep dives from the Xenon team" />
</svelte:head>

<section class="section" style="padding-top: 64px">
  <div class="container">
    <h1 class="text-primary" style="margin-bottom: 1.25rem; font-size: clamp(1.6rem, 3vw, 2.2rem)">Posts</h1>
    <p style="color: var(--text-secondary); margin-bottom: 2rem">Updates, ideas, and technical write‑ups.</p>

    <div style="display: grid; gap: 1rem">
      {#each posts as post}
        <article class="post-card" style="border: 1px solid var(--border-light); border-radius: 12px; padding: 1.25rem; background: #fff;">
          <header style="display: flex; align-items: baseline; justify-content: space-between; gap: .75rem; margin-bottom: .5rem">
            <h2 style="margin: 0; color: var(--text-primary); font-size: 1.15rem">
              <a href={`/blog/${post.slug}`} style="color: inherit; text-decoration: none">{post.title}</a>
            </h2>
            <time datetime={post.date.split('.').reverse().join('-')} style="color: var(--text-muted); white-space: nowrap">{post.date}</time>
          </header>

          <div class="preview" style="position: relative; max-height: 220px; overflow: hidden; line-height: 1.7; color: var(--text-primary)">
            <div class="preview-content" style="text-decoration: none">{@html post.content}</div>
            <div aria-hidden="true" style="position: absolute; left: 0; right: 0; bottom: 0; height: 48px; background: linear-gradient(to bottom, rgba(255,255,255,0), #ffffff)"></div>
          </div>

          <div style="margin-top: .75rem">
            <a href={`/blog/${post.slug}`} class="btn btn-secondary btn-compact" style="text-decoration: none">Read post</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
  
</section>
