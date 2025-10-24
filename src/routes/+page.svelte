<script>
  import { onMount } from 'svelte'

  let currentFeature = 'framework'
  let currentScreenshot = 0
  const screenshots = ['/main.png', '/canvas.png']
  
  const features = {
    framework: {
      title: 'Unparalleld Performance and Resource utilisation.',
      description: 'Reusing an already installed browser engines avoids redownloading and installing hundreds of megabytes for every project. Configurable resource limits and tab advanced hibernation allow running 10.000s virtual tabs without performance and resource hits. \n As APIs are justa thin layer on top of established and optimized infrastructure drviing chrome today, the performance is as native as possible. Furthermore, we do not rely on outdated and ineffecient automation libraries made for testing, instead the automation features are enabled surgically when used where needed combining multiple apis and always using the lowest impact onr.'
    },
    security: {
      title: 'Security as default',
      description: 'Xenon builds on top of vetted chrome native APIs (IWA + controlled frames) that have public specs and undergo security review from mulitple parties. They offer far superiour application sandboxing compared to electron or manual webviews. Not being tied to an unsandboxed runtime like nodejs limits further blast radius of any higher level sandbox escapes. The capability based permission system is not bolted on but a central layer controlling any resource request by tabs agents or other users with autiting and mocking capabilities. Xenons AI/Agent architecture employs state of the art visibiity into context and memories as well as sensitivity scores for each item. \n Every action is ranked by risk of prompt injection attack and Exfiltration risk based on previous actions. This gives a clear indication of risk and allows the user to use agents as powerful as possible for their desired security profile. Relying on underlying Browsers utilizes established and well maintained security infrastructure such as certificate revocations, zero day patches and many more, that would be not realiable in random chrimium forks.'
    },
    agency: {
      title: 'User Agency First',
      description: 'While we focus on securty as default, unlike browsers targeting only mainstream users and VC fed growth, xenon will give users options to do what they want how they want even if that comes with significant resposibilities and associated risk. To limit the blast radius, give users a fair choice about what power/ security tradeoff they are making and keeping this sustainable, we employ multiple layers defending this architecture: Locked Down mode is the default wehre everything is cryptographically singed, uncmodified, tested, audited and used by the core dev team. This includes the small app catalog of officially supported apps and defaults for agent capabilities. All configuratios that change this balance will have detialed visibility in what aspects are impaced and what worst case risks associated are. Applications and extensions have fine grained permissions that give access to powerfull feautres but wiht visibility and control. Shared apps have a web of trust based base trust that is augmented by autoatic code scanning, security egant audits and social feedback. Lastly it is possible to run in unlocked mode, esentially opening the whole system to ad hoc mutation and experiments or development. This can be done on a per window basis and is comparable to runnng as root.' 
    },
    compatibility: {
      title: 'Web Standards',
      description: 'While xenon currently only works in chrome based browsers, we are working hard to convince firefox that a layer between engine and browser that is under the users control is needed everywhere, the altervative is a plethora of electron and chromium fork borwsers that take up gigabites on our machines and have horrifc security as well as wasting years of developer years rebuiling the shared featrures from scretch every time. \n The system is structured in a way to make a move in this direction at least possible, if you believe in our cause and are involved, please support us.'
    }
  }

  function nextScreenshot() {
    currentScreenshot = (currentScreenshot + 1) % screenshots.length
  }

  onMount(() => {
    const interval = setInterval(() => {
      nextScreenshot()
    }, 10000)
    
    return () => clearInterval(interval)
  })
</script>

<svelte:head>
  <title>Xenon Framework • Darc browser built on Xenon</title>
  <meta name="description" content="Xenon is a framework for desktop apps. Darc is a purpose-built browser engine that runs on top of Xenon for app-like UIs." />
</svelte:head>

<section class="hero" style="position: relative; overflow: hidden; background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);">
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
        Build Beyond Browsers
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
    <div class="frame" aria-label="App screenshot placeholder" style="position: relative; padding-bottom: 24px; padding-right: 24px;">
      <div class="screenshot-stack" onmousedown={nextScreenshot}>
        <!-- Background cards showing inactive screenshots -->
        {#each screenshots as screenshot, i}
          {#if i !== currentScreenshot}
            <img 
              src={screenshot} 
              alt="Background screenshot" 
              style="position: absolute; top: 12px; left: 12px; width: 100%; border-radius: 6px; display: block; z-index: {i}; box-shadow: 0 4px 8px rgba(0,0,0,0.1); box-shadow: 0 0 2px 0px white;"
            />
          {/if}
        {/each}
        
        <!-- Front card showing current screenshot -->
        <img 
          src={screenshots[currentScreenshot]} 
          alt="Xenon with Darc browser UI screenshot" 
          style="position: relative; width: 100%; border-radius: 6px; display: block; z-index: 10; box-shadow: 0 4px 12px rgba(0,0,0,0.12); box-shadow: 0 0 2px 0px white;transition: transform 0.3s ease;"
          class="screenshot-zoom"
        />
      </div>
    </div>
  </div>
</section>

<section class="section" style="background: #ffffff;">
  <div class="container text-center">
    <h2 class="text-primary" style="margin-bottom: 1rem;">What to build with Xenon?</h2>
    <p style="max-width: 600px; margin: 0 auto; font-size: 1.1rem;">
      Build agentic, experimental, niche or totally personal browser experiences without sacrificing performance or security — and without rebuilding everything from scratch.
    </p>
  </div>
</section>

<section id="features" class="section section-alt">
  <div class="container">
    <div class="text-center" style="margin-bottom: 3.5rem;">
      <h2 class="text-primary" style="margin-bottom: 12px;">
        Built for the age of the agentic web
      </h2>
      <p style="max-width: 640px; margin: 0 auto;">
        
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
                            <rect x="2" y="14" width="2" height="2" fill="black"/>
              <rect x="4" y="14" width="2" height="2" fill="black"/>
              <rect x="6" y="14" width="2" height="2" fill="black"/>
              <rect x="8" y="14" width="2" height="2" fill="black"/>
              <rect x="10" y="14" width="2" height="2" fill="black"/>
              <rect x="12" y="14" width="2" height="2" fill="black"/>
              <rect x="14" y="14" width="2" height="2" fill="black"/>
              <rect x="16" y="14" width="2" height="2" fill="black"/>
              <rect x="14" y="16" width="2" height="2" fill="black"/>
              <rect x="12" y="18" width="2" height="2" fill="black"/>
              <rect x="10" y="20" width="2" height="2" fill="black"/>
              <rect x="8" y="22" width="2" height="2" fill="black"/>
            </svg>
          </div>
        </div>
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Build Faster</h3>
        <p style="line-height: 1.7;">Skip the grindwork and just write the code that matters.</p>
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
        <p style="line-height: 1.7;">Rely on a central sandboxing and permission system with proper defaults and granular control from day one.</p>
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
        <h3 style="margin-bottom: 12px; color: var(--text-primary); font-size: 1.25rem;">Build with web tech</h3>
        <p style="line-height: 1.7;">Build as close to web standards as possible instad of fiddling with C++ or nodejs APIs. (While chromium only for now, we are working on electron and firefox compatibility)</p>
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
          Build on darc or pick just the the parts you need.
        </h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Darc is a full featured reference browser that has everything you come to expect from state of the art agentic browsers
        </p>
        <div style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.25rem;">Key Features:</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.2rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Memory-efficient tab management with hibernation, spaces, tab groups and more
            </li>
            
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.2rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Advanced central permission system with granular control
            </li>
            
            <li style="margin-bottom: 0.75rem; display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.2rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Automation Layer and Agent Sidebar build from the ground up for lowest latency expereinces not on top of slow and resource hungry test frameworks
            </li>
            
            <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.2rem;">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              Support for different view modes like tabs, canvas or tile view
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
      <p>See what makes Xenon special</p>
    </div>
    
    <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap;">
      {#each Object.keys(features) as key}
        <button 
          class="btn {currentFeature === key ? 'btn-primary' : 'btn-secondary'}"
          onmousedown={() => currentFeature = key}
        >
          {key === 'framework' ? 'Performance' : key === 'security' ? 'Security' : 'Standards'}
        </button>
      {/each}
    </div>
    
    <div>
      <h3 class="text-center" style="margin-bottom: 1rem; color: var(--text-primary);">
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
        "Xenon allowed me to write the browser i always wanted in a few months not years, a fraction of code that would have been needed otherwise and without the security and resource impact that solutions like electron would have brought. It is fair to say that no other solution would have allowed darc to be built."
      </p>
      <div style="display: flex; align-items: center; justify-content: center; gap: 12px; position: relative;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--xenon-blue), var(--xenon-purple)); box-shadow: 0 0 20px var(--xenon-blue);"></div>
        <div style="text-align: left;">
          <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin: 0;">Jan Johannes</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">about rewriting the conceptual browser darc from firefox fork to xenon (and in the process joining the core team)</p>
        </div>
      </div>
    </div>
    
    <h2 class="text-primary" style="margin-bottom: 1rem;">
      Ready to <span class="handcrafted-underline">Build</span> with Xenon?
    </h2>
    <p style="margin-bottom: 3rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto;">
      Xenon is in early stages and will mature as infrastructure and learnings are factored from darc into the sdk. If you have a usecase ping us on discord, we are happy to help you navigate the rough edges and understand the limitations and things already working great.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="#features" class="btn btn-primary btn-compact">
        Go to Discord
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
      <p style="color: var(--text-muted);">Build the browsers that work for you.</p>
    </div>
    <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
      <a href="#" style="color: var(--text-secondary); text-decoration: none;">Documentation</a>
      <a href="#" style="color: var(--text-secondary); text-decoration: none;">Community</a>
      <a href="/posts" style="color: var(--text-secondary); text-decoration: none;">Posts</a>
      <a href="#" style="color: var(--text-secondary); text-decoration: none;">Support</a>
    </div>
    <p style="color: var(--text-muted); font-size: 0.9rem;">
      © 2025 Agent54 - XE, built with ❤️ in Thailand and around the world.
    </p>
  </div>
</footer>
