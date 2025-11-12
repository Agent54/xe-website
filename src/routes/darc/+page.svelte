<script>
  let currentOS = 0
  
  const features = {
    browsing: {
      title: 'Full Browsing Experience',
      description: 'Full-featured browser built for human power users, not just AI agents.'
    },
    agents: {
      title: 'AI That Works For You',
      description: 'Agent features that enhance your workflow without taking agency from users. Everything transparent, opt in and optional.'
    },
    security: {
      title: 'Privacy First',
      description: `Your data stays yours with granular permissions and sandboxing as well as latest security pracices. We don't rush to be first, thanks to your donations, we have the time to make it open and make it right.`
    }
  }
  
  const operatingSystems = [
    { name: 'macOS', icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' },
    { name: 'Windows', icon: 'M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801' },
    { name: 'Linux', icon: 'M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.684-.287 2.489.123.805.487 1.52 1.133 2.062.645.542 1.476.95 2.421 1.229.945.279 2.006.432 3.134.432 1.128 0 2.189-.153 3.134-.432.945-.279 1.776-.687 2.421-1.229.646-.542 1.01-1.257 1.133-2.062.123-.805-.009-1.649-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.005 2.024c.075 0 .15.003.224.009 2.438.195 1.688 3.235 1.734 4.31.054 1.257.367 2.32 1.285 3.629.918 1.309 2.053 2.863 2.564 4.403.192.578.292 1.14.207 1.615-.085.475-.346.851-.831 1.242-.485.391-1.184.732-2.002.972-.818.24-1.747.372-2.676.372-.929 0-1.858-.132-2.676-.372-.818-.24-1.517-.581-2.002-.972-.485-.391-.746-.767-.831-1.242-.085-.475.015-1.037.207-1.615.511-1.54 1.646-3.094 2.564-4.403.918-1.309 1.231-2.372 1.285-3.629.046-1.075-.704-4.115 1.734-4.31.074-.006.149-.009.224-.009z' },
    { name: 'ChromeOS', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z' }
  ]
  
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

<!-- Hero Section -->
<section class="hero" style="position: relative; overflow: hidden;">
  <div class="container hero-grid">
    <div>
      <div class="hero-eyebrow" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <span style="text-transform: uppercase; letter-spacing: .12em; font-size: .85rem; font-weight: 600;">Built on Xenon Framework</span>
      </div>
      <h1 class="hero-title">
        Darc Browser
      </h1>
      <p class="hero-desc">
        A purpose-built browser running on the Xenon framework. Designed for real browsing experiences with agent features that enhance and empower rather than replace human control. All the power features you come to expect. And the ones you can imagine.
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

<!-- Build for Browsing, Not Just AI -->
<section id="browsing" class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items: center; gap: 4rem;">
      <div>
        <h2 class="text-primary" style="margin-bottom: 1.5rem;">
          Built for Browsing, Not Just AI
        </h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Darc is a real web browser first. While AI agents are powerful tools, they shouldn't be the only way to interact with the web. 
          Darc provides a full-featured browsing experience designed for human agency.
        </p>
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.25rem;">Power Features:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <div>Horizontal Tab groups, Spaces Sidebar and Zen Mode give you optimal organization tools whether you have one tab, ten or thousands.</div>
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <div>Unified data model combines tabs and bookmarks—never think about sessions or window restore again. Never lose a tab, close windows and resume where you left off at any time.</div>
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <div>Innovative view modes let you organize tabs, apps and content in the optimal way for your current task.</div>
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <div>Research and annotate on a canvas, scroll through your reading list, find things with tile view, or get back into work with advanced history overview.</div>
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <div>Create your own views—you're not a passive consumer but can change and create custom experiences.</div>
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.25rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <div>Link previews, gestures and Lightbox views allow you to browse smarter without even leaving your tab.</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="feature-card-enhanced" style="padding: 3rem;">
        <h3 style="margin-bottom: 1.5rem; color: var(--text-primary); text-align: center;">Browser Features</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="border-left: 1px solid var(--text-primary); padding: 1rem; background: var(--bg-section); border-radius: 4px;">
            <strong style="display: block; margin-bottom: 0.5rem;">Tabs & Windows</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Multi-tab browsing with full window management</p>
          </div>
          <div style="border-left: 1px solid var(--text-primary); padding: 1rem; background: var(--bg-section); border-radius: 4px;">
            <strong style="display: block; margin-bottom: 0.5rem;">View Modes</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">...</p>
          </div>
          <div style="border-left: 1px solid var(--text-primary); padding: 1rem; background: var(--bg-section); border-radius: 4px;">
            <strong style="display: block; margin-bottom: 0.5rem;">Productivity</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="agents" class="section section-alt">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <h2 class="text-primary" style="margin-bottom: 12px;">
        Agent Features That Work For You
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        Agents should elevate your browsing, not take control over you.
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
        <p style="line-height: 1.7;">Context-aware suggestions that help you navigate and complete tasks faster without interrupting your flow.</p>
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
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Automation Assist</h3>
        <p style="line-height: 1.7;">Automate repetitive tasks with your explicit permission. You decide what runs and when.</p>
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
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Transparent Actions</h3>
        <p style="line-height: 1.7;">Every agent action is visible and auditable. No hidden behavior or unexpected surprises.</p>
      </div>
    </div>
  </div>
</section>

<!-- Security and Privacy -->
<section id="security" class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items: center; gap: 4rem;">
      <div class="feature-card-enhanced" style="padding: 3rem;">
        <h3 style="margin-bottom: 1.5rem; color: var(--text-primary); text-align: center;">Security Layers</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: var(--bg-section); border-radius: 4px; border-left: 1px solid var(--text-primary);">
            <strong style="display: block; margin-bottom: 0.5rem;">Process Isolation</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Each tab runs in its own sandboxed process</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-section); border-radius: 4px; border-left: 1px solid var(--text-primary);">
            <strong style="display: block; margin-bottom: 0.5rem;">Permission System</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Granular control over what sites can access</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-section); border-radius: 4px; border-left: 1px solid var(--text-primary);">
            <strong style="display: block; margin-bottom: 0.5rem;">Memory Safety</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Rust-based core prevents common vulnerabilities</p>
          </div>
          <div style="padding: 1rem; background: var(--bg-section); border-radius: 4px; border-left: 1px solid var(--text-primary);">
            <strong style="display: block; margin-bottom: 0.5rem;">Local First</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary);">Your data stays on your machine by default</p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-primary" style="margin-bottom: 1.5rem;">
          Security and Privacy
        </h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Darc is built with security and privacy as core principles, not afterthoughts. 
          Running on Xenon's secure foundation, Darc provides multiple layers of protection for your browsing.
        </p>
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.25rem;">Privacy Guarantees:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              No telemetry or tracking by default
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              You control what data leaves your device
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Open source and auditable
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Built on proven Chromium security model
            </li>
          </ul>
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
        Supported Browser Engines
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        Choose the browser engine that works best for you. Both provide full web standards support.
      </p>
    </div>
    
    <div class="grid grid-2" style="max-width: 900px; margin: 0 auto;">
      <div class="feature-card-enhanced">
        <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.25rem;">Chrome</h3>
        <p style="line-height: 1.7; margin-bottom: 1.5rem;">
          Use your existing Chrome browser installation. Leverages the Chrome engine you already have for rendering and web standards support.
        </p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Uses existing Chrome installation
          </li>
          <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
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
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <h3 style="margin: 0; color: var(--text-primary); font-size: 1.25rem;">Helium</h3>
          <span style="background: rgba(255, 255, 255, 0.1); padding: 3px 10px; border-radius: 3px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Recommended</span>
        </div>
        <p style="line-height: 1.7; margin-bottom: 1.5rem;">
          Optimized Chromium-based engine built specifically for Xenon and Darc. Provides enhanced performance and tighter integration.
        </p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            Optimized for Xenon framework
          </li>
          <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
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
            onmousedown={prevOS}
            aria-label="Previous operating system"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          
          <div class="screenshot-placeholder">
            <div class="screenshot-grid">
              <div class="screenshot-bar"></div>
              <div class="screenshot-sidebar"></div>
              <div class="screenshot-main"></div>
            </div>
          </div>
          <div class="os-icon-overlay">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={operatingSystems[currentOS].icon}/>
            </svg>
          </div>
          
          <button 
            class="carousel-btn carousel-next" 
            onmousedown={nextOS}
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
            onmousedown={() => currentOS = index}
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
      <a href="https://github.com/agent54/xe-darc" class="btn btn-primary btn-compact">
        View on GitHub
      </a>
      <a href="https://github.com/agent54/xe-darc" class="btn btn-secondary btn-compact">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View on GitHub
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
  
  .screenshot-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 40px 1fr;
    gap: 1px;
    background: rgba(255, 255, 255, 0.05);
  }
  
  .screenshot-bar {
    grid-column: 1 / -1;
    background: #202020;
  }
  
  .screenshot-sidebar {
    background: #181818;
  }
  
  .screenshot-main {
    background: #1d1d1d;
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
    
    .screenshot-grid {
      grid-template-columns: 120px 1fr;
      grid-template-rows: 30px 1fr;
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
</style>

