<script>
  import { onMount } from 'svelte';
  import BrowserEngines from '$lib/BrowserEngines.svelte';
  
  // Detect OS
  function detectOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();
    
    if (platform.includes('mac') || userAgent.includes('mac')) {
      return 0; // macOS
    } else if (platform.includes('win') || userAgent.includes('win')) {
      return 1; // Windows
    } else if (platform.includes('linux') || userAgent.includes('linux')) {
      return 2; // Linux
    } else if (userAgent.includes('cros')) {
      return 3; // ChromeOS
    }
    return 0; // Default to macOS
  }
  
  let currentOS = 0
  let selectedBrowserFeature = 'tabs'
  let selectedSecurityFeature = 'permissions'
  
  onMount(() => {
    currentOS = detectOS();
  });
  
  const features = {
    browsing: {
      title: 'Full Browsing Experience',
      description: 'Full-featured browser built for human power users, not just AI agents.'
    },
    agents: {
      title: 'AI That Works For You',
      description: 'Agent features that enhance your workflow without taking agency from users. Everything is transparent, opt-in, and optional.'
    },
    security: {
      title: 'Privacy First',
      description: `Your data stays yours with granular permissions and sandboxing as well as latest security practices. We don't rush to be first. Thanks to your donations, we have the time to make it open and make it right.`
    }
  }
  
  const powerFeatures = [
    { category: 'tabs', text: 'Horizontal tab groups, Spaces sidebar, and Zen Mode give you optimal organization tools whether you have one tab, ten, or thousands.' },
    { category: 'tabs', text: 'Unified data model combines tabs and bookmarks—never think about sessions or window restore again. Never lose a tab; close windows and resume where you left off at any time.' },
    { category: 'views', text: 'View modes let you organize tabs, apps and content in the optimal way for your current task.' },
    { category: 'views', text: 'Research and annotate on a canvas, scroll through your reading list, find things with tile view, or get back into work with advanced history overview.' },
    { category: 'views', text: "Create your own views—you're not a passive consumer but can change and create custom experiences." },
    { category: 'productivity', text: 'Link previews, gestures, and Lightbox views allow you to browse smarter without even leaving your tab.' }
  ]
  
  const securityFeatures = [
    { category: 'permissions', text: 'Unified permission layer across all resources that works the same way for agents, web apps, websites, and extensions.' },
    { category: 'permissions', text: 'See what permissions a site or agent has in an always-available sidebar, not hidden in pop-ups and the depths of settings pages.' },
    { category: 'context', text: 'Advanced context management and visibility with indicators for sensitivity and trust scores for each item.' },
    { category: 'context', text: 'Always know the risks. Never be in the dark about what an agent sees.' },
    { category: 'auditing', text: 'Auditing from the ground up—not just a feature for enterprises but a basic need for everyone.' },
    { category: 'auditing', text: 'Central database of every interaction, including permission requests and browser history with user/agent attribution and filters.' },
    { category: 'auditing', text: 'All data can stay fully local or in self-hosted databases.' }
  ]
  
  const operatingSystems = [
    { name: 'macOS', icon: ['M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'], viewBox: '0 0 24 24', screenshot: '/main.png' },
    { name: 'Windows', icon: ['M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801'], viewBox: '0 0 24 24', screenshot: '/windows.png' },
    { name: 'Linux', icon: ['M14.62,8.35c-.42.28-1.75,1-1.95,1.19a.82.82,0,0,1-1.14,0c-.2-.16-1.53-.92-1.95-1.19s-.45-.7.08-.92a6.16,6.16,0,0,1,4.91,0c.49.21.51.6,0,.9m7.22,7.28A19.09,19.09,0,0,0,18,10a4.31,4.31,0,0,1-1.06-1.88c-.1-.33-.17-.67-.24-1A11.32,11.32,0,0,0,16,4.47,4.06,4.06,0,0,0,12.16,2,4.2,4.2,0,0,0,8.21,4.4a5.9,5.9,0,0,0-.46,1.34c-.17.76-.32,1.55-.5,2.32a3.38,3.38,0,0,1-1,1.71,19.53,19.53,0,0,0-3.88,5.35A6.09,6.09,0,0,0,2,16c-.19.66.29,1.12,1,1,.44-.09.88-.18,1.3-.31s.57,0,.67.35a6.73,6.73,0,0,0,4.24,4.5c4.12,1.56,8.93-.66,10-4.58.07-.27.17-.37.47-.27.46.14.93.24,1.4.35a.72.72,0,0,0,.92-.64,1.44,1.44,0,0,0-.16-.73'], viewBox: '0 0 24 24', screenshot: '/linux.png' },
    { name: 'ChromeOS', icon: ['M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z', 'M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z', 'M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z'], viewBox: '0 0 1024 1024', screenshot: '/linux.png' }
  ]
  
  $: filteredPowerFeatures = selectedBrowserFeature 
    ? powerFeatures.filter(f => f.category === selectedBrowserFeature)
    : powerFeatures
  
  $: filteredSecurityFeatures = selectedSecurityFeature 
    ? securityFeatures.filter(f => f.category === selectedSecurityFeature)
    : securityFeatures
  
  $: console.log('Selected:', selectedBrowserFeature, 'Filtered:', filteredPowerFeatures.length)
  
  function nextOS() {
    currentOS = (currentOS + 1) % operatingSystems.length
  }
  
  function prevOS() {
    currentOS = (currentOS - 1 + operatingSystems.length) % operatingSystems.length
  }
</script>

<svelte:head>
  <title>Darc Browser • Built on Xenon Framework</title>
  <meta name="description" content="Darc is a purpose-built browser for power users and developers running on Xenon. Built for browsing, and trustable AI. Agent features that work for you. Security and privacy first." />
</svelte:head>

<div class="darc-page">

<section class="hero" style="position: relative; overflow: hidden; padding-top: 12rem; padding-bottom: 12rem;">
  <div class="container hero-grid">
    <div>
      <div class="hero-eyebrow" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <span style="text-transform: uppercase; letter-spacing: .12em; font-size: .85rem; font-weight: 600;">Built on Xenon Framework</span>
      </div>
      <h1 class="hero-title">
        Darc Browser
      </h1>
      <p class="hero-desc">
        A purpose-built browser running on the Xenon framework. Designed for real browsing experiences with agent features that enhance and empower rather than replace human control. All the power features you've come to expect—and the ones you can imagine.
      </p>
      <div class="hero-ctas">
        <a href="#browsing" class="btn btn-primary" aria-label="Learn about Darc browsing" style="position: relative; overflow: hidden;">
          Learn More
        </a>
        <a href="/" class="btn btn-secondary">Back to Xenon</a>
      </div>
    </div>
    <div class="frame" aria-label="Darc browser screenshot" style="position: relative;">
      <div class="frame-body" role="img" aria-label="Darc browser UI screenshot">
        <img src="/main.png" alt="Darc browser UI screenshot" />
      </div>
    </div>
  </div>
</section>


<section id="browsing" class="section section-alt">
  <div class="container">
    <div class="grid grid-2" style="padding-top: 2rem; align-items: flex-start; gap: 4rem;">
      <div>
        <h2 class="text-primary" style="margin-bottom: 1.5rem;">
          Built for Browsing, Not Just AI
        </h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Darc is a real web browser first. While AI agents are powerful tools, they shouldn't be the only way to interact with the web. 
          Darc provides a full-featured browsing experience designed for human agency.
        </p>
        <div style="margin-bottom: 2rem; min-height: 250px;">
          
            <ul style="list-style: none; padding: 0;">
            {#each filteredPowerFeatures as feature}
              <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <div>{feature.text}</div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <div 
        class="feature-card-enhanced" 
        style="padding: 3rem;"
      >
        <h3 style="margin-bottom: 1.5rem; color: var(--text-primary); text-align: center;">Browser Features</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <button 
            class="feature-selector" 
            class:selected={selectedBrowserFeature === 'tabs'}
            onmouseenter={() => {
              console.log('Hovered tabs button');
              selectedBrowserFeature = 'tabs';
            }}
          >
            <strong style="display: block; margin-bottom: 0.5rem;">Tabs & Windows</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Tab groups, spaces, and unified bookmarks for seamless organization</p>
          </button>
          <button 
            class="feature-selector" 
            class:selected={selectedBrowserFeature === 'views'}
            onmouseenter={() => {
              console.log('Hovered views button');
              selectedBrowserFeature = 'views';
            }}
          >
            <strong style="display: block; margin-bottom: 0.5rem;">View Modes</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Canvas, reading list, tile view, and customizable layouts</p>
          </button>
          <button 
            class="feature-selector" 
            class:selected={selectedBrowserFeature === 'productivity'}
            onmouseenter={() => {
              console.log('Hovered productivity button');
              selectedBrowserFeature = 'productivity';
            }}
          >
            <strong style="display: block; margin-bottom: 0.5rem;">Productivity</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Link previews, gestures, and lightbox views for efficient browsing</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="agents" class="section">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <h2 class="text-primary" style="margin-bottom: 12px;">
        Agent Features That Work For You
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        Agents should elevate your browsing, not take control away from you.
      </p>
    </div>
    
    <div class="grid grid-3">
      <div class="feature-card-enhanced">
        <!-- <div style="margin-bottom: 1.5rem; position: relative;">
          <div style="width: 64px; height: 64px; background: #fafafa; border: 1px solid var(--border-light); border-radius: 2px; display: flex; align-items: center; justify-content: center;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="6" y="10" width="20" height="2" fill="black"/>
              <rect x="6" y="15" width="16" height="2" fill="black"/>
              <rect x="6" y="20" width="18" height="2" fill="black"/>
            </svg>
          </div>
        </div> -->
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Smart Suggestions</h3>
        <p style="line-height: 1.7;">Context-aware suggestions that help you navigate and complete tasks faster without interrupting your flow. Think of it as tab-complete everywhere.</p>
      </div>
      
      <div class="feature-card-enhanced">
        <!-- <div style="margin-bottom: 1.5rem; position: relative;">
          <div style="width: 64px; height: 64px; background: #fafafa; border: 1px solid var(--border-light); border-radius: 2px; display: flex; align-items: center; justify-content: center;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="8" y="8" width="16" height="16" fill="none" stroke="black" stroke-width="2"/>
              <rect x="12" y="12" width="8" height="8" fill="black"/>
            </svg>
          </div>
        </div> -->
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Next-generation Browser Automation</h3>
        <p style="line-height: 1.7;">Existing automation features feel like glue to get anything done and don't scale beyond a few tabs. We build a new system into the core that instantly reacts and gets out of your way just as fast.</p>
      </div>
      
      <div class="feature-card-enhanced">
        <!-- <div style="margin-bottom: 1.5rem; position: relative;">
          <div style="width: 64px; height: 64px; background: #fafafa; border: 1px solid var(--border-light); border-radius: 2px; display: flex; align-items: center; justify-content: center;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="16" cy="16" r="10" fill="none" stroke="black" stroke-width="2"/>
              <rect x="15" y="8" width="2" height="8" fill="black"/>
              <rect x="15" y="18" width="2" height="2" fill="black"/>
            </svg>
          </div>
        </div> -->
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Runs Where You Want</h3>
        <p style="line-height: 1.7;">Everything can run fully locally or in the cloud, depending on your resources and preferences.</p>
      </div>
    </div>
  </div>
</section>

<!-- Security and Privacy -->
<section id="security" class="section section-alt">
  <div class="container">
    <div class="grid grid-2" style="padding-top: 2rem; align-items: flex-start; gap: 4rem;">
      <div>
        <h2 class="text-primary" style="margin-bottom: 1.5rem;">
          Security and Privacy
        </h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Darc is built with security and privacy as core principles, not afterthoughts. 
          Running on Xenon's secure foundation, Darc provides multiple layers of protection for your browsing.
        </p>
        <div style="margin-bottom: 2rem; min-height: 250px;">
          
            <ul style="list-style: none; padding: 0;">
            {#each filteredSecurityFeatures as feature}
              <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <div>{feature.text}</div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <div 
        class="feature-card-enhanced" 
        style="padding: 3rem;"
      >
        <h3 style="margin-bottom: 1.5rem; color: var(--text-primary); text-align: center;">Security Features</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <button 
            class="feature-selector" 
            class:selected={selectedSecurityFeature === 'permissions'}
            onmouseenter={() => {
              console.log('Hovered permissions button');
              selectedSecurityFeature = 'permissions';
            }}
          >
            <strong style="display: block; margin-bottom: 0.5rem;">Permissions</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Unified permission layer with always-visible controls</p>
          </button>
          <button 
            class="feature-selector" 
            class:selected={selectedSecurityFeature === 'context'}
            onmouseenter={() => {
              console.log('Hovered context button');
              selectedSecurityFeature = 'context';
            }}
          >
            <strong style="display: block; margin-bottom: 0.5rem;">Context Management</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Advanced visibility with sensitivity and trust scores</p>
          </button>
          <button 
            class="feature-selector" 
            class:selected={selectedSecurityFeature === 'auditing'}
            onmouseenter={() => {
              console.log('Hovered auditing button');
              selectedSecurityFeature = 'auditing';
            }}
          >
            <strong style="display: block; margin-bottom: 0.5rem;">Auditing</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Complete interaction history with local or self-hosted storage</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Browser Engines -->
<section class="section">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <h2 class="text-primary" style="margin-bottom: 12px;">
        Multiple Browser Engines
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        Choose the browser engine that works best for you.
      </p>
    </div>
    
    <BrowserEngines />
  </div>
</section>

<!-- Operating Systems Carousel -->
<section class="section section-alt">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3rem;">
      <h2 class="text-primary" style="margin-bottom: 12px;">
        Available on Your Platform
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        Darc runs on macOS, Windows, Linux, and ChromeOS. Choose your platform to get started.
      </p>
    </div>
    
    <div style="max-width: 600px; margin: 0 auto;">
      <div class="carousel-content">
        <div class="screenshot-container">
          <button 
            class="carousel-btn carousel-prev" 
            onclick={prevOS}
            aria-label="Previous operating system"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          
          <div class="screenshot-placeholder" style="background-image: url({operatingSystems[currentOS].screenshot}); background-size: cover; background-position: center;">
          </div>
          <div class="os-icon-overlay">
            <svg width="48" height="48" viewBox={operatingSystems[currentOS].viewBox} fill="currentColor" aria-hidden="true">
              {#each operatingSystems[currentOS].icon as pathData}
                <path d={pathData}/>
              {/each}
            </svg>
          </div>
          
          <button 
            class="carousel-btn carousel-next" 
            onclick={nextOS}
            aria-label="Next operating system"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"/>
            </svg>
          </button>
        </div>
        <h3 style="margin-top: 1.5rem; margin-bottom: 1rem; font-size: 1.75rem;">{operatingSystems[currentOS].name}</h3>
        <a href="/darc/install" class="btn btn-primary">
          Install on {operatingSystems[currentOS].name}
        </a>
      </div>
      
      <div class="carousel-dots">
        {#each operatingSystems as _, index}
          <button 
            class="carousel-dot"
            class:active={index === currentOS}
            onclick={() => currentOS = index}
            aria-label="Go to {operatingSystems[index].name}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="section">
  <div class="container text-center">
    <h2 class="text-primary" style="margin-bottom: 1rem;">
      Ready to Browse With <span class="handcrafted-underline">Darc</span>?
    </h2>
    <p style="margin-bottom: 3rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      Experience a browser built for humans, powered by the Xenon framework.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="https://github.com/agent54/xe-darc" class="btn btn-secondary btn-compact">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View on GitHub
      </a>
    </div>
  </div>
</section>

<footer style="background: var(--bg-section); padding: 3rem 0; border-top: 1px solid var(--border-light);">
  <div class="container text-center">
    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Darc</h3>
      <p style="color: var(--text-muted);">A browser built for humans, powered by Xenon.</p>
    </div>
    
    <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">
      © 2025 Agent54 - XE, built with ❤️ in Thailand and around the world.
    </p>
    <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">
      Contact: <a href="mailto:hello@xe.dev" style="color: var(--text-primary); text-decoration: none;">hello@xe.dev</a>
    </p>
  </div>
</footer>

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
  
  :global(body:has(.darc-page) .nav a.active) {
    color: #e8e8e8;
    background: rgba(255, 255, 255, 0.08);
  }
  
  :global(body:has(.darc-page) .mobile-menu-toggle) {
    color: #e8e8e8;
  }
  
  @media (max-width: 768px) {
    :global(body:has(.darc-page) .nav-mobile) {
      background: rgba(18, 18, 18, 0.85);
      border-top-color: rgba(255, 255, 255, 0.08);
      border-left-color: rgba(255, 255, 255, 0.08);
      border-bottom-color: rgba(255, 255, 255, 0.08);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
    }
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
  .darc-page :global(p),
  .darc-page :global(.hero-eyebrow span) {
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
  
  .carousel-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
  }
  
  .screenshot-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .carousel-prev {
    left: -60px;
  }
  
  .carousel-next {
    right: -60px;
  }
  
  .screenshot-placeholder {
    width: 100%;
    aspect-ratio: 16/10;
    background: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  }
  
  .os-icon-overlay {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(26, 26, 26, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    padding: 8px;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .os-icon-overlay svg {
    display: block;
    opacity: 0.9;
  }
  
  .carousel-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
    color: rgba(232, 232, 232, 0.6);
    flex-shrink: 0;
    opacity: 0.5;
  }
  
  .carousel-btn:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.15);
    color: rgba(232, 232, 232, 0.9);
    opacity: 1;
  }
  
  .carousel-btn svg {
    width: 18px;
    height: 18px;
  }
  
  .carousel-dots {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2rem;
  }
  
  .carousel-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
    padding: 0;
  }
  
  .carousel-dot:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.2);
  }
  
  .carousel-dot.active {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.3);
  }
  
  @media (max-width: 768px) {
    .carousel-content {
      padding: 1rem;
    }
    
    .carousel-btn {
      width: 32px;
      height: 32px;
    }
    
    .carousel-prev {
      left: -40px;
    }
    
    .carousel-next {
      right: -40px;
    }
    
    .carousel-btn svg {
      width: 16px;
      height: 16px;
    }
    
    .os-icon-overlay {
      top: 8px;
      left: 8px;
      padding: 6px;
    }
    
    .os-icon-overlay svg {
      width: 32px;
      height: 32px;
    }
  }
  
  .darc-page :global(.handcrafted-underline) {
    color: #e8e8e8;
    text-shadow: none;
  }
  
  .darc-page :global(.handcrafted-underline::after) {
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0.3) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0.3) 100%
    );
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.08);
  }
  
  .feature-selector {
    color: inherit;
    font-family: inherit;
    padding: 1rem;
    background: var(--bg-section);
    border-radius: 4px;
    text-align: left;
    cursor: pointer;
    width: 100%;
    transition: all 0.2s ease;
    border: none;
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    pointer-events: auto;
    position: relative;
    z-index: 1;
  }
  
  .feature-selector:hover {
    background: #1d1d1d;
    border-left: 2px solid rgba(255, 255, 255, 0.4);
  }
  
  .feature-selector.selected {
    border-left: 3px solid rgba(255, 255, 255, 0.8);
  }
  
  .feature-selector strong,
  .feature-selector p {
    pointer-events: none;
  }
</style>

