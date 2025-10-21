<script>
  import './styles.css'
  import { page } from '$app/stores'

  let brandName
  let brandLink
  let isDarc
  $: {
    isDarc = $page.url.pathname.startsWith('/darc')
    brandName = isDarc ? 'Darc' : 'Xenon'
    brandLink = isDarc ? '/darc' : '/'
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
        <a href="/#features">Xenon Framework</a>
        <a href="/darc">Darc Browser</a>
        <a href="/about">About Us</a>
        <a href="/posts">Posts</a>
        <a href="/#features" class="btn btn-secondary">Get Started</a>
      </nav>
    </div>
  </header>

  <main class="min-h-screen">
    <slot />
  </main>
</div>