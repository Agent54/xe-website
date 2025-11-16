<script>
  import BrowserEngines from '$lib/BrowserEngines.svelte';
  
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
    },
    chromeos: {
      title: 'ChromeOS Installation',
      steps: [
        'Download the Darc Linux package (.deb)',
        'Enable Linux (Beta) in ChromeOS Settings if not already enabled',
        'Open the Files app and move the .deb file to the Linux files folder',
        'Double-click the .deb file to install',
        'Launch Darc from the app launcher'
      ]
    }
  }
</script>

<svelte:head>
  <title>Install Darc Browser • Built on Xenon Framework</title>
  <meta name="description" content="Install Darc browser on macOS, Windows, Linux, or ChromeOS. Choose between Chrome or Helium browser engines." />
</svelte:head>

<div class="darc-page">

<div class="sticky-back-button">
  <div class="container">
    <a href="/darc" class="btn btn-secondary btn-compact">← Back to Darc</a>
  </div>
</div>

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
          <path d="M14.62,8.35c-.42.28-1.75,1-1.95,1.19a.82.82,0,0,1-1.14,0c-.2-.16-1.53-.92-1.95-1.19s-.45-.7.08-.92a6.16,6.16,0,0,1,4.91,0c.49.21.51.6,0,.9m7.22,7.28A19.09,19.09,0,0,0,18,10a4.31,4.31,0,0,1-1.06-1.88c-.1-.33-.17-.67-.24-1A11.32,11.32,0,0,0,16,4.47,4.06,4.06,0,0,0,12.16,2,4.2,4.2,0,0,0,8.21,4.4a5.9,5.9,0,0,0-.46,1.34c-.17.76-.32,1.55-.5,2.32a3.38,3.38,0,0,1-1,1.71,19.53,19.53,0,0,0-3.88,5.35A6.09,6.09,0,0,0,2,16c-.19.66.29,1.12,1,1,.44-.09.88-.18,1.3-.31s.57,0,.67.35a6.73,6.73,0,0,0,4.24,4.5c4.12,1.56,8.93-.66,10-4.58.07-.27.17-.37.47-.27.46.14.93.24,1.4.35a.72.72,0,0,0,.92-.64,1.44,1.44,0,0,0-.16-.73"/>
        </svg>
        Linux
      </button>
      <button 
        class="btn {selectedOS === 'chromeos' ? 'btn-primary' : 'btn-secondary'}"
        onmousedown={() => selectedOS = 'chromeos'}
      >
        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true">
          <path d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"/>
          <path d="M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"/>
          <path d="M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"/>
        </svg>
        ChromeOS
      </button>
    </div>
    
    <div style="position: relative; max-width: 800px; margin: 0 auto;">
      <div class="coming-soon-overlay">
        <span class="coming-soon-badge">Coming Soon</span>
      </div>
      <div class="feature-card-enhanced blurred-card" style="padding: 3rem;">
        <h2 style="margin-bottom: 2rem; text-align: center;">{osInstructions[selectedOS].title}</h2>
        
        <ol style="list-style: decimal; padding-left: 1.5rem; margin-bottom: 2rem;">
          {#each osInstructions[selectedOS].steps as step}
            <li style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6; color: rgba(232, 232, 232, 0.85);">
              {step}
            </li>
          {/each}
        </ol>
        
        <div style="text-align: center; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <a href="https://github.com/agent54/xe-darc/releases" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Download for {selectedOS === 'mac' ? 'macOS' : selectedOS === 'windows' ? 'Windows' : selectedOS === 'linux' ? 'Linux' : 'ChromeOS'}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <h2 class="text-center" style="margin-bottom: 1.5rem;">Browser Engine Selection</h2>
    <p class="text-center" style="max-width: 640px; margin: 0 auto 3rem;">
      Choose which engine to use.
    </p>
    
    <BrowserEngines />
  </div>
</section>

<section class="section">
  <div class="container text-center">
    <h2 style="margin-bottom: 1rem;">Need Help?</h2>
    <p style="margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      Join our community for installation support and questions.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="https://go.userandagents.com/discord" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Ask for Help on Discord
      </a>
    </div>
  </div>
</section>

</div>

<style>
  .sticky-back-button {
    position: sticky;
    top: 80px;
    z-index: 100;
    padding: 1rem 0;
  }
  
  .sticky-back-button .container {
    padding-left: 0 !important;
  }
  
  .blurred-card {
    filter: blur(4px);
    pointer-events: none;
    user-select: none;
  }
  
  .coming-soon-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    pointer-events: none;
  }
  
  .coming-soon-badge {
    background: rgba(26, 26, 26, 0.95);
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #e8e8e8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }

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

