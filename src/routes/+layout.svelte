<script>
  import './styles.css'
  import { page } from '$app/stores'

  let brandName
  let brandLink
  let isDarc
  let currentPath
  let mobileMenuOpen = false
  
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
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false
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
      
      <button 
        class="mobile-menu-toggle" 
        onclick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          {#if mobileMenuOpen}
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          {:else}
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          {/if}
        </svg>
      </button>
      
      <nav class="nav nav-desktop" aria-label="Primary">
        <a href="/" class:active={isActive('/')} aria-current={isActive('/') ? 'page' : undefined}>Xenon Framework</a>
        <a href="/darc" class:active={isActive('/darc')} aria-current={isActive('/darc') ? 'page' : undefined}>Darc Browser</a>
        <a href="/about" class:active={isActive('/about')} aria-current={isActive('/about') ? 'page' : undefined}>About Us</a>
        <!-- <a href="/posts" class:active={isActive('/posts')} aria-current={isActive('/posts') ? 'page' : undefined}>Posts</a> -->
        <a href="https://github.com/agent54" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </nav>
    </div>
  </header>
  
  <nav class="nav nav-mobile" class:mobile-open={mobileMenuOpen} aria-label="Primary">
    <a href="/" class:active={isActive('/')} aria-current={isActive('/') ? 'page' : undefined} onclick={closeMobileMenu}>Xenon Framework</a>
    <a href="/darc" class:active={isActive('/darc')} aria-current={isActive('/darc') ? 'page' : undefined} onclick={closeMobileMenu}>Darc Browser</a>
    <a href="/about" class:active={isActive('/about')} aria-current={isActive('/about') ? 'page' : undefined} onclick={closeMobileMenu}>About Us</a>
    <!-- <a href="/posts" class:active={isActive('/posts')} aria-current={isActive('/posts') ? 'page' : undefined} onclick={closeMobileMenu}>Posts</a> -->
    <a href="https://github.com/agent54" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" onclick={closeMobileMenu}>View on GitHub</a>
  </nav>

  <main class="min-h-screen" class:menu-offset={mobileMenuOpen}>
    <slot />
  </main>
</div>