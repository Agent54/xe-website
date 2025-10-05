<script>
  import './styles.css'
</script>

<header class="header">
  <div class="container header-inner">
    <div class="brand">
      <span aria-label="Xenon">Xenon</span>
    </div>
    <nav class="nav" aria-label="Primary">
      <a href="#features">Features</a>
      <a href="#learn-more">Darc</a>
      <a href="#download" class="btn btn-secondary">Download</a>
    </nav>
  </div>
</header>

<main class="min-h-screen">
  <slot />
</main>