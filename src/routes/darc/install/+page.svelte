<script>
  let selectedOS = 'mac'
  
  const osInstructions = {
    mac: {
      title: 'macOS Installation',
      steps: [
        'Download the Darc installer for macOS',
        'Open the downloaded .dmg file',
        'Drag Darc to your Applications folder',
        'Launch Darc from Applications or Spotlight',
        'Follow the setup wizard to configure your browser engine'
      ]
    },
    windows: {
      title: 'Windows Installation',
      steps: [
        'Download the Darc installer for Windows',
        'Run the .exe installer',
        'Follow the installation wizard',
        'Choose your preferred browser engine (Chrome or Helium)',
        'Launch Darc from the Start menu or desktop shortcut'
      ]
    },
    linux: {
      title: 'Linux Installation',
      steps: [
        'Download the appropriate package for your distribution (.deb, .rpm, or .AppImage)',
        'Install using your package manager or run the AppImage directly',
        'For Debian/Ubuntu: sudo dpkg -i darc.deb',
        'For Fedora/RHEL: sudo rpm -i darc.rpm',
        'Launch Darc from your application menu'
      ]
    }
  }
</script>

<svelte:head>
  <title>Install Darc Browser • Built on Xenon Framework</title>
  <meta name="description" content="Install Darc browser on macOS, Windows, or Linux. Choose between Chrome or Helium browser engines." />
</svelte:head>

<div class="darc-page">

<section class="hero" style="position: relative; overflow: hidden; padding: 80px 0 60px;">
  <div class="container text-center">
    <h1 class="hero-title">
      Install Darc Browser
    </h1>
    <p class="hero-desc" style="margin: 0 auto;">
      Get started with Darc on your platform. Choose your operating system below.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
      <button 
        class="btn {selectedOS === 'mac' ? 'btn-primary' : 'btn-secondary'}"
        onmousedown={() => selectedOS = 'mac'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        macOS
      </button>
      <button 
        class="btn {selectedOS === 'windows' ? 'btn-primary' : 'btn-secondary'}"
        onmousedown={() => selectedOS = 'windows'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
        </svg>
        Windows
      </button>
      <button 
        class="btn {selectedOS === 'linux' ? 'btn-primary' : 'btn-secondary'}"
        onmousedown={() => selectedOS = 'linux'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.684-.287 2.489.123.805.487 1.52 1.133 2.062.645.542 1.476.95 2.421 1.229.945.279 2.006.432 3.134.432 1.128 0 2.189-.153 3.134-.432.945-.279 1.776-.687 2.421-1.229.646-.542 1.01-1.257 1.133-2.062.123-.805-.009-1.649-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.005 2.024c.075 0 .15.003.224.009 2.438.195 1.688 3.235 1.734 4.31.054 1.257.367 2.32 1.285 3.629.918 1.309 2.053 2.863 2.564 4.403.192.578.292 1.14.207 1.615-.085.475-.346.851-.831 1.242-.485.391-1.184.732-2.002.972-.818.24-1.747.372-2.676.372-.929 0-1.858-.132-2.676-.372-.818-.24-1.517-.581-2.002-.972-.485-.391-.746-.767-.831-1.242-.085-.475.015-1.037.207-1.615.511-1.54 1.646-3.094 2.564-4.403.918-1.309 1.231-2.372 1.285-3.629.046-1.075-.704-4.115 1.734-4.31.074-.006.149-.009.224-.009z"/>
        </svg>
        Linux
      </button>
    </div>
    
    <div class="feature-card-enhanced" style="max-width: 800px; margin: 0 auto; padding: 3rem;">
      <h2 style="margin-bottom: 2rem; text-align: center;">{osInstructions[selectedOS].title}</h2>
      
      <ol style="list-style: decimal; padding-left: 1.5rem; margin-bottom: 2rem;">
        {#each osInstructions[selectedOS].steps as step}
          <li style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6; color: rgba(232, 232, 232, 0.85);">
            {step}
          </li>
        {/each}
      </ol>
      
      <div style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
        <a href="#" class="btn btn-primary">
          Download for {selectedOS === 'mac' ? 'macOS' : selectedOS === 'windows' ? 'Windows' : 'Linux'}
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <h2 class="text-center" style="margin-bottom: 1.5rem;">Browser Engine Selection</h2>
    <p class="text-center" style="max-width: 640px; margin: 0 auto 3rem;">
      During installation, you'll choose which browser engine to use. Both options provide full web standards support.
    </p>
    
    <div class="grid grid-2" style="max-width: 900px; margin: 0 auto;">
      <div class="feature-card-enhanced">
        <h3 style="margin-bottom: 1rem;">Chrome Engine</h3>
        <p style="margin-bottom: 1.5rem; line-height: 1.7;">
          Use the Chrome browser engine you already have installed. Leverages your existing Chrome installation for rendering.
        </p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Uses existing Chrome installation
          </li>
          <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Automatic updates via Chrome
          </li>
          <li style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Familiar rendering behavior
          </li>
        </ul>
      </div>
      
      <div class="feature-card-enhanced" style="border: 2px solid rgba(255, 255, 255, 0.2);">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
          <h3 style="margin: 0;">Helium Engine</h3>
          <span style="background: rgba(255, 255, 255, 0.1); padding: 2px 8px; border-radius: 3px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Recommended</span>
        </div>
        <p style="margin-bottom: 1.5rem; line-height: 1.7;">
          Optimized Chromium-based engine built specifically for Xenon and Darc. Provides enhanced performance and tighter integration.
        </p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Optimized for Xenon framework
          </li>
          <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Better performance and memory usage
          </li>
          <li style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Tighter Darc integration
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container text-center">
    <h2 style="margin-bottom: 1rem;">Need Help?</h2>
    <p style="margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      Check out our documentation or join the community for installation support.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="/darc" class="btn btn-secondary">Back to Darc</a>
      <a href="https://github.com/xenon-framework" class="btn btn-secondary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Documentation
      </a>
    </div>
  </div>
</section>

</div>

<style>
  :global(body:has(.darc-page)) {
    background: #0f0f0f;
    transition: background-color 0.6s ease;
  }
  
  :global(body:has(.darc-page) .header) {
    background: rgba(18, 18, 18, 0.85);
    border-bottom-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03);
    transition: background-color 0.6s ease, border-color 0.6s ease, box-shadow 0.6s ease;
  }
  
  :global(body:has(.darc-page) .brand) {
    color: #e8e8e8;
    transition: color 0.6s ease;
  }
  
  :global(body:has(.darc-page) .nav a) {
    color: rgba(232, 232, 232, 0.7);
    transition: color 0.6s ease, background-color 0.6s ease;
  }
  
  :global(body:has(.darc-page) .nav a:hover) {
    color: #e8e8e8;
    background: rgba(255, 255, 255, 0.05);
  }
  
  :global(body:has(.darc-page) .btn-secondary) {
    background: rgba(255, 255, 255, 0.05);
    color: #e8e8e8;
    border-color: rgba(255, 255, 255, 0.15);
    transition: background-color 0.6s ease, color 0.6s ease, border-color 0.6s ease;
  }
  
  :global(body:has(.darc-page) .btn-secondary:hover) {
    border-color: rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
  }
  
  .darc-page {
    background: #0f0f0f;
    color: #e8e8e8;
    min-height: 100vh;
    transition: background-color 0.6s ease, color 0.6s ease;
  }
  
  .darc-page :global(.hero) {
    background: transparent !important;
  }
  
  .darc-page :global(.section) {
    background: #0f0f0f;
    transition: background-color 0.6s ease;
  }
  
  .darc-page :global(.section-alt) {
    background: #151515;
    transition: background-color 0.6s ease;
  }
  
  .darc-page :global(.hero-title),
  .darc-page :global(h2),
  .darc-page :global(h3),
  .darc-page :global(strong) {
    color: #e8e8e8;
    transition: color 0.6s ease;
  }
  
  .darc-page :global(.hero-desc),
  .darc-page :global(p) {
    color: rgba(232, 232, 232, 0.75);
    transition: color 0.6s ease;
  }
  
  .darc-page :global(.feature-card-enhanced) {
    background: #1a1a1a;
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    transition: background-color 0.6s ease, border-color 0.6s ease, box-shadow 0.3s ease;
  }
  
  .darc-page :global(.feature-card-enhanced:hover) {
    background: #1d1d1d;
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.04), 0 2px 8px rgba(0, 0, 0, 0.6);
  }
  
  .darc-page :global(.btn-primary) {
    background: linear-gradient(135deg, #2a2a2a, #323232);
    color: #e8e8e8;
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: background 0.6s ease, color 0.6s ease, border-color 0.6s ease, box-shadow 0.3s ease;
  }
  
  .darc-page :global(.btn-primary:hover) {
    background: linear-gradient(135deg, #323232, #3a3a3a);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.06), 0 2px 6px rgba(0, 0, 0, 0.5);
  }
  
  .darc-page :global(.btn-secondary) {
    background: #1a1a1a;
    color: #e8e8e8;
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: background-color 0.6s ease, color 0.6s ease, border-color 0.6s ease, box-shadow 0.3s ease;
  }
  
  .darc-page :global(.btn-secondary:hover) {
    background: #1f1f1f;
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.05), 0 1px 4px rgba(0, 0, 0, 0.4);
  }
  
  .darc-page :global(.btn svg) {
    flex-shrink: 0;
  }
</style>

