<script>
  import './styles.css'
</script>

<header class="header">
  <div class="container header-inner">
    <a href="/" class="brand">
      <span aria-label="Xenon">Xenon</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a href="/#features">Framework</a>
      <a href="/darc">Darc</a>
      <a href="/posts">Posts</a>
      <a href="/#features" class="btn btn-secondary">Get Started</a>
    </nav>
  </div>
</header>

<main class="min-h-screen">
  <slot />
</main>