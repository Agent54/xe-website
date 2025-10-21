<script>
  let currentFeature = 'framework'
  
  const features = {
    framework: {
      title: 'Native Performance',
      description: 'Built with Rust and modern web technologies for lightning-fast applications.'
    },
    security: {
      title: 'Security First',
      description: 'Sandboxed execution with granular permissions and memory safety.'
    },
    compatibility: {
      title: 'Web Standards',
      description: 'Full compatibility with modern web APIs and standards.'
    }
  }
</script>

<svelte:head>
  <title>Xenon Framework • Darc browser built on Xenon</title>
  <meta name="description" content="Xenon is a framework for desktop apps. Darc is a purpose-built browser engine that runs on top of Xenon for app-like UIs." />
</svelte:head>

<section class="hero" style="position: relative; overflow: hidden; background: linear-gradient(180deg, #ffffff 0%, rgba(230,243,255,0.3) 100%);">
  <div class="container hero-grid">
    <div>
      <div class="hero-eyebrow" style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
        <!-- Pixel Axolotl Mascot -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg class="axolotl" width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Xeno the Axolotl mascot" shape-rendering="crispEdges">
            <!-- Body -->
            <rect x="10" y="14" width="12" height="8" fill="#ffe9ef"/>
            <rect x="8" y="16" width="2" height="4" fill="#ffe9ef"/>
            <rect x="22" y="16" width="2" height="4" fill="#ffe9ef"/>
            <!-- Head -->
            <rect x="12" y="10" width="8" height="6" fill="#ffe9ef"/>
            <!-- Gills (external) - slightly darker for modulation -->
            <rect x="10" y="10" width="2" height="2" fill="#ffb7cc"/>
            <rect x="8" y="11" width="2" height="2" fill="#ff9fbf"/>
            <rect x="8" y="13" width="2" height="2" fill="#ffb7cc"/>
            <rect x="20" y="10" width="2" height="2" fill="#ffb7cc"/>
            <rect x="22" y="11" width="2" height="2" fill="#ff9fbf"/>
            <rect x="22" y="13" width="2" height="2" fill="#ffb7cc"/>
            <!-- Tail - two tones for subtle depth -->
            <rect x="14" y="22" width="4" height="2" fill="#ffd6e3"/>
            <rect x="12" y="24" width="8" height="2" fill="#ffd0df"/>
            <rect x="14" y="26" width="4" height="2" fill="#ffc6d9"/>
            <!-- Eyes -->
            <rect x="13" y="12" width="2" height="2" fill="#0a0a0a"/>
            <rect x="17" y="12" width="2" height="2" fill="#0a0a0a"/>
            <!-- Tiny feet -->
            <rect x="12" y="20" width="2" height="2" fill="#f6c2d1"/>
            <rect x="18" y="20" width="2" height="2" fill="#f6c2d1"/>
          </svg>
          <span style="width: 34px; height: 2px; background: linear-gradient(90deg, transparent, rgba(160,190,230,0.8)); box-shadow: 0 0 10px rgba(160,190,230,0.35);"></span>
        </div>
        <span style="color: #5b6a7a; text-transform: uppercase; letter-spacing: .12em; font-size: .85rem; font-weight: 600;">agency for super human computing</span>
      </div>
      <h1 class="hero-title text-primary">
        Build Browsers and Beyond
      </h1>
      <p class="hero-desc">
        Xenon is a framework to build secure and powerful applications with browser-like capabilities based on web standards and backed by the chrome based browser you already have.
      </p>
      <div class="hero-ctas">
        <a href="#features" class="btn btn-primary" aria-label="Get started with Xenon" style="position: relative; overflow: hidden;">
          Get Started
        </a>
        <a href="#features" class="btn btn-secondary">Explore features</a>
        <a href="/darc" class="btn btn-secondary">Learn About Darc</a>
      </div>
    </div>
    <div class="frame" aria-label="App screenshot placeholder" style="position: relative;">
      <div class="frame-body" role="img" aria-label="Xenon and Darc application screenshot">
        <img src="https://github.com/user-attachments/assets/b9ae22fa-a370-4d88-bd84-aaac4e13a9f1" alt="Xenon with Darc browser UI screenshot" />
      </div>
    </div>
  </div>
</section>

<!-- White spacer section for contrast -->
<section class="section" style="background: #ffffff;">
  <div class="container text-center">
    <h2 class="text-primary" style="margin-bottom: 1rem;">Why Choose Xenon?</h2>
    <p style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
      Build desktop applications with the performance of native apps and the flexibility of web technologies.
    </p>
  </div>
</section>

<!-- Features Overview -->
<section id="features" class="section section-alt">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <h2 class="text-primary" style="margin-bottom: 12px;">
        Built for Modern Development
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        Xenon combines native performance with web flexibility. Darc runs on Xenon to provide a dedicated browser environment for your app UI.
      </p>
    </div>
    
    <div class="grid grid-3">
      <div class="feature-card-enhanced">
        <div style="margin-bottom: 1.5rem; position: relative;">
          <div style="width: 64px; height: 64px; background: #fafafa; border: 1px solid var(--border-light); border-radius: 2px; display: flex; align-items: center; justify-content: center;">
            <!-- Pixel lightning bolt icon -->
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="14" y="2" width="2" height="2" fill="black"/>
              <rect x="12" y="4" width="2" height="2" fill="black"/>
              <rect x="10" y="6" width="2" height="2" fill="black"/>
              <rect x="8" y="8" width="2" height="2" fill="black"/>
              <rect x="6" y="10" width="2" height="2" fill="black"/>
              <rect x="4" y="12" width="2" height="2" fill="black"/>
              <rect x="10" y="14" width="2" height="2" fill="black"/>
              <rect x="12" y="14" width="2" height="2" fill="black"/>
              <rect x="14" y="14" width="2" height="2" fill="black"/>
              <rect x="16" y="14" width="2" height="2" fill="black"/>
              <rect x="14" y="16" width="2" height="2" fill="black"/>
              <rect x="12" y="18" width="2" height="2" fill="black"/>
              <rect x="10" y="20" width="2" height="2" fill="black"/>
              <rect x="8" y="22" width="2" height="2" fill="black"/>
              <rect x="18" y="8" width="2" height="2" fill="black"/>
              <rect x="20" y="10" width="2" height="2" fill="black"/>
              <rect x="22" y="12" width="2" height="2" fill="black"/>
              <rect x="24" y="14" width="2" height="2" fill="black"/>
            </svg>
          </div>
        </div>
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Lightning Fast</h3>
        <p style="line-height: 1.7;">Native Rust core with optimized JavaScript execution. Up to 3x faster than traditional Electron apps.</p>
      </div>
      
      <div class="feature-card-enhanced">
        <div style="margin-bottom: 1.5rem; position: relative;">
          <div style="width: 64px; height: 64px; background: #fafafa; border: 1px solid var(--border-light); border-radius: 2px; display: flex; align-items: center; justify-content: center;">
            <!-- Pixel padlock icon -->
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="10" y="6" width="2" height="2" fill="black"/>
              <rect x="12" y="4" width="8" height="2" fill="black"/>
              <rect x="20" y="6" width="2" height="2" fill="black"/>
              <rect x="8" y="8" width="2" height="2" fill="black"/>
              <rect x="22" y="8" width="2" height="2" fill="black"/>
              <rect x="8" y="10" width="2" height="2" fill="black"/>
              <rect x="22" y="10" width="2" height="2" fill="black"/>
              <rect x="8" y="12" width="2" height="2" fill="black"/>
              <rect x="22" y="12" width="2" height="2" fill="black"/>
              <rect x="6" y="14" width="20" height="2" fill="black"/>
              <rect x="6" y="16" width="2" height="10" fill="black"/>
              <rect x="24" y="16" width="2" height="10" fill="black"/>
              <rect x="8" y="26" width="16" height="2" fill="black"/>
              <rect x="14" y="18" width="4" height="2" fill="black"/>
              <rect x="14" y="20" width="4" height="2" fill="black"/>
              <rect x="14" y="22" width="4" height="2" fill="black"/>
            </svg>
          </div>
        </div>
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Secure by Default</h3>
        <p style="line-height: 1.7;">Advanced sandboxing and permission system. Your applications run in isolated environments with granular access control.</p>
      </div>
      
      <div class="feature-card-enhanced">
        <div style="margin-bottom: 1.5rem; position: relative;">
          <div style="width: 64px; height: 64px; background: #fafafa; border: 1px solid var(--border-light); border-radius: 2px; display: flex; align-items: center; justify-content: center;">
            <!-- Pixel globe icon -->
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="12" y="2" width="8" height="2" fill="black"/>
              <rect x="8" y="4" width="4" height="2" fill="black"/>
              <rect x="20" y="4" width="4" height="2" fill="black"/>
              <rect x="6" y="6" width="2" height="2" fill="black"/>
              <rect x="24" y="6" width="2" height="2" fill="black"/>
              <rect x="4" y="8" width="2" height="4" fill="black"/>
              <rect x="26" y="8" width="2" height="4" fill="black"/>
              <rect x="2" y="12" width="2" height="8" fill="black"/>
              <rect x="28" y="12" width="2" height="8" fill="black"/>
              <rect x="4" y="20" width="2" height="4" fill="black"/>
              <rect x="26" y="20" width="2" height="4" fill="black"/>
              <rect x="6" y="24" width="2" height="2" fill="black"/>
              <rect x="24" y="24" width="2" height="2" fill="black"/>
              <rect x="8" y="26" width="4" height="2" fill="black"/>
              <rect x="20" y="26" width="4" height="2" fill="black"/>
              <rect x="12" y="28" width="8" height="2" fill="black"/>
              <rect x="8" y="14" width="16" height="2" fill="black"/>
              <rect x="14" y="8" width="2" height="16" fill="black"/>
            </svg>
          </div>
        </div>
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Web Standards</h3>
        <p style="line-height: 1.7;">Full compatibility with modern web APIs. Build with the tools and frameworks you already know and love.</p>
      </div>
    </div>
  </div>
</section>

<!-- Darc Browser Section -->
<section class="section">
  <div class="container">
    <div class="grid grid-2" style="align-items: center; gap: 4rem;">
      <div>
        <h2 class="text-primary" style="margin-bottom: 1.5rem;">
          Darc Browser, Built on Xenon
        </h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Darc is a purpose‑built browser engine that runs on top of the Xenon framework. 
          Unlike general‑purpose browsers, Darc is optimized for app‑like experiences with enhanced security and performance.
        </p>
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.25rem;">Key Features:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Memory-efficient rendering engine
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Advanced process isolation
            </li>
            <li style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Native OS integration
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Hot-reload development experience
            </li>
          </ul>
        </div>
        <a href="#features" class="btn btn-secondary">
          Get Started with Xenon
        </a>
      </div>
      <div class="retro-terminal-container">
        <div class="retro-terminal">
          <div class="terminal-header">
            <div class="terminal-controls">
              <span class="terminal-dot terminal-close"></span>
              <span class="terminal-dot terminal-minimize"></span>
              <span class="terminal-dot terminal-maximize"></span>
            </div>
            <div class="terminal-title">xenon-app.js</div>
          </div>
          <div class="terminal-content">
            <pre><code><span class="terminal-comment">// Xenon app</span>
            <span class="terminal-import">import</span> <span class="terminal-bracket">&#123; createApp &#125;</span> <span class="terminal-import">from</span> <span class="terminal-string">'xenon'</span>

            <span class="terminal-keyword">const</span> app = <span class="terminal-function">createApp</span>(<span class="terminal-bracket">&#123;</span>
              <span class="terminal-property">window</span>: <span class="terminal-bracket">&#123;</span>
                <span class="terminal-property">width</span>: <span class="terminal-number">1200</span>,
                <span class="terminal-property">height</span>: <span class="terminal-number">800</span>,
                <span class="terminal-property">title</span>: <span class="terminal-string">'My App'</span>
              <span class="terminal-bracket">&#125;</span>
            <span class="terminal-bracket">&#125;</span>)

            app.<span class="terminal-function">start</span>()</code></pre>
          </div>
          <div class="terminal-scanlines"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3rem;">
      <h2 class="text-primary" style="margin-bottom: 1rem;">
        Experience the Difference
      </h2>
      <p>See how Xenon compares to traditional desktop app frameworks</p>
    </div>
    
    <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
      {#each Object.keys(features) as key}
        <button 
          class="btn {currentFeature === key ? 'btn-primary' : 'btn-secondary'}"
          on:mousedown={() => currentFeature = key}
        >
          {key === 'framework' ? 'Performance' : key === 'security' ? 'Security' : 'Standards'}
        </button>
      {/each}
    </div>
    
    <div class="text-center">
      <h3 style="margin-bottom: 1rem; color: var(--text-primary);">
        {features[currentFeature].title}
      </h3>
      <p style="font-size: 1.1rem; max-width: 500px; margin: 0 auto;">
        {features[currentFeature].description}
      </p>
    </div>
  </div>
</section>

<section class="section" style="position: relative; overflow: hidden;">
  <div class="container text-center" style="position: relative; z-index: 1;">
    <!-- Quote with plasma glow -->
    <div style="max-width: 720px; margin: 0 auto 3rem; padding: 2rem; background: linear-gradient(135deg, rgba(0,212,255,0.03), rgba(153,69,255,0.03)); border-radius: 20px; border: 1px solid var(--border-light); position: relative; overflow: hidden;">
      <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at center, rgba(0,212,255,0.05), transparent 40%); pointer-events: none;"></div>
      <p style="font-size: 1.25rem; line-height: 1.6; color: var(--text-primary); font-style: italic; margin-bottom: 1rem; position: relative;">
        "Xenon transformed how we build desktop apps. The performance gains are real, and Darc's browser engine just works."
      </p>
      <div style="display: flex; align-items: center; justify-content: center; gap: 12px; position: relative;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--xenon-blue), var(--xenon-purple)); box-shadow: 0 0 20px var(--xenon-blue);"></div>
        <div style="text-align: left;">
          <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0;">Sarah Chen</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Lead Developer, Arcwave</p>
        </div>
      </div>
    </div>
    
    <h2 class="text-primary" style="margin-bottom: 1rem;">
      Ready to <span class="handcrafted-underline">Build</span> with Xenon?
    </h2>
    <p style="margin-bottom: 3rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      Join developers who are already building next-generation desktop applications with Xenon and Darc.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="#features" class="btn btn-primary btn-compact">
        Get Started
      </a>
      <a href="https://github.com/xenon-framework" class="btn btn-secondary btn-compact">
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
      <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">Xenon</h3>
      <p style="color: var(--text-muted);">The next-generation desktop application framework</p>
    </div>
    <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
      <a href="#" style="color: var(--text-secondary); text-decoration: none;">Documentation</a>
      <a href="#" style="color: var(--text-secondary); text-decoration: none;">Community</a>
      <a href="/posts" style="color: var(--text-secondary); text-decoration: none;">Posts</a>
      <a href="#" style="color: var(--text-secondary); text-decoration: none;">Support</a>
    </div>
    <p style="color: var(--text-muted); font-size: 0.9rem;">
      © 2025 Xenon Framework. Built with passion for better desktop applications.
    </p>
  </div>
</footer>
