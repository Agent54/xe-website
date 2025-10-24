export const posts = [
  {
    slug: 'rethinking-tabs-canvas-mode-spatial-navigation',
    title: 'Rethinking Tabs: Canvas Mode and Spatial Navigation',
    date: '26.10.2025',
    content: `
Tabs were a good idea in 1997. But we're still using them exactly the same way, just with more of them. Darc takes a different approach: spatial layouts where tabs become cards you can see, arrange, and navigate naturally.

## The problem with tab bars

Modern browsing creates dozens of tabs. The tab bar responds by shrinking them until you can't read titles, can't see favicons, can't find anything. Browser vendors add features like tab groups and vertical tabs, but they're still solving the wrong problem.

The real issue: linear lists don't match how we think about related content. When researching a topic, you don't think "tab 1, tab 2, tab 3." You think in clusters, relationships, and visual memory.

## Canvas mode: tabs as cards

In canvas mode, tabs become cards on an infinite canvas. You see the actual page content as live thumbnails. Arrange them however makes sense: cluster related research, line up comparison shopping, create a reading pile.

Key behaviors:
- Zoom out to see everything, zoom in to focus
- Drag cards to organize spatially
- Cards update live but hibernate when idle
- Click to activate, drag to rearrange

## Natural navigation gestures

The zoom metaphor extends naturally:
- Pinch out past 100% → overview mode appears
- Pinch in from overview → return to active tab
- Momentum scrolling across the canvas
- Double-tap to fit card to view

No mode switching, no keyboard shortcuts to memorize. The same gesture you use to zoom a photo works for navigating your workspace.

## Spatial memory works

Research shows spatial memory is remarkably persistent. You remember where you put things, not what order they're in. Canvas mode leverages this: that documentation is always top-left, your email stays bottom-right, social media lives in its corner.

Traditional browsers fight this instinct. Every new session scrambles your mental map. Canvas mode preserves spatial relationships across sessions.

## Performance through hibernation

Showing hundreds of live web pages sounds expensive. It would be, except tabs hibernate aggressively:
- Inactive tabs drop to near-zero CPU
- Screenshots replace live rendering
- Wake instantly on interaction
- Progressive loading based on viewport

The result: you can have hundreds of cards visible with the performance cost of a handful of active tabs.

## Implementation details

Canvas mode builds on three primitives:
1. **Controlled frames** for tab isolation and lifecycle
2. **WebGL canvas** for smooth pan/zoom at 120fps
3. **Intersection observers** for viewport-based hibernation

The thumbnail system captures at strategic moments:
- After page load completes
- Before hibernation
- On significant DOM changes
- At regular intervals for active tabs

## What we learned

Users organize spatially when given the chance. In testing:
- People create consistent "zones" for different activities
- Visual thumbnails make finding tabs 3x faster
- Zoom gestures feel more natural than keyboard shortcuts
- Hibernated tabs use 95% less memory than active ones

## Next steps

Canvas mode is just the beginning. We're exploring:
- Auto-layout algorithms for common patterns
- Shared canvases for collaborative browsing
- Time-based layers (yesterday's research, today's work)
- Smart suggestions based on spatial proximity

The goal isn't to replace tabs entirely. It's to give you options that match how you actually think about your browsing. Sometimes that's a list. Often it's a map.

---

*Canvas mode is available in Darc today. Zoom out past 50% or hit Cmd+Shift+G to try it.*
`
  },
  {
    slug: 'building-a-browser-for-ai-agents',
    title: 'Building a Browser for AI Agents',
    date: '25.10.2025',
    content: `
AI agents don’t just need an HTTP client; they need a safe, observable, permissioned way to see and act on the living web. That’s why we’re building Darc on top of Xenon: a browser architecture designed for agents.

## Why agents need a browser

- **Real pages, real state**: SPAs, navigation, redirects, storage, service workers
- **Consistent rendering**: the DOM as the real API surface for UI work
- **Human-in-the-loop**: users should be able to see, pause, and override

## Architecture: Controlled Frames + IWA

Darc builds on emerging web platform work: controlled frames and Isolated Web Apps (IWA). Controlled frames give a parent context the ability to supervise navigation, events and policy for content frames. IWA gives apps a hardened, permissioned sandbox.

- Parent orchestrates frame lifecycle, navigation and policies
- Child runs unmodified web content with strong isolation
- Clear channels for messages, audits and prompts

See: [Controlled Frame spec](https://wicg.github.io/controlled-frame)

## Permissions as capabilities

Agents request explicit capabilities at action time, not just at install:

- Navigation and link opening
- Network access (origins, methods)
- Clipboard read/write
- File access and downloads
- Screenshot and DOM snapshot

Each request is logged, scored for exfiltration risk, and can require user approval depending on policy.

## Observability and safety rails

- Structured logs for navigation, clicks, requests, injections
- Snapshots (screenshot + DOM summary) for review and reproducibility
- Timeboxed actions with automatic rollback and recovery flows
- Guardrails against prompt injection and sensitive-data exfiltration

## Performance: hibernation by default

Background frames hibernate to near‑zero CPU/RAM and wake instantly on demand. Heavy tasks are scheduled; screenshots update after load completes to keep UI smooth.

## Minimal example

\`\`\`js
// pseudo-code: supervise a frame with explicit capabilities
const frame = createControlledFrame({ url: 'https://example.com' })

frame.on('capability-request', async req => {
  if (req.type === 'clipboard.write') {
    return policy.approve({ reason: 'Agent writing result to clipboard' })
  }
  if (req.type === 'network.fetch' && req.origin.endsWith('example.com')) {
    return policy.approve()
  }
  return policy.deny({ reason: 'Out of scope' })
})

// observable actions
await frame.navigate('https://example.com/search?q=controlled+frame')
await frame.click('[data-result]:first-child')
const snap = await frame.snapshot() // screenshot + dom digest
\`\`\`

## Roadmap highlights

- Richer MCP integration for tool discovery and policy
- Deeper audit trails (screenflow + action graph)
- Extension bridge for compatibility where sensible

Darc treats the browser as infrastructure for agents: permissioned, observable, and fast. If you want to build serious agent workflows on the web, this is the foundation.
`
  },
  {
    slug: 'software-will-be-fundamentally-different',
    title: 'Software Will Be Fundamentally Different',
    date: '25.10.2025',
    content: `
The software you use will be fundamentally different. Not just developed differently—fundamentally different in nature.

## Running on Your Device

Software will run on users' devices, not in distant data centers optimized for surveillance and control. When your browser, your agent, your tools run locally, the power dynamic shifts. The code serves you, not a remote corporation's quarterly targets.

This isn't just about privacy or performance. It's about agency. When software runs on your machine, you can inspect it, modify it, break it, fix it, and make it yours.

## Rewritten and Remixed

Software will be rewritten and remixed. Constantly. If something annoys you, it will be removed—not after filing a ticket that gets marked "working as intended," but immediately. By you. Or by your agent. Or by someone in your community who shares your frustration.

The malleable software movement has been talking about this for decades. We're finally at the point where the tools exist to make it real. AI agents that can read, understand, and modify code. Browsers that expose their internals rather than hiding them. Frameworks built for remixing rather than lock-in.

## Copied in Days

If there's no alignment with users, software will be copied and improved in days, not years. This is already happening. Take any popular app, give an agent access to a capable framework, and watch it replicate the core functionality in a weekend.

This isn't theft—it's evolution. And it forces a crucial question: what happens when the barriers to creating software approach zero? When the only sustainable advantage is genuine user alignment?

## The Implications

This changes everything:

**For users:** You're no longer trapped. That feature you hate? Gone. That privacy-invading tracker? Removed. That clunky workflow? Streamlined. The software adapts to you, not the other way around.

**For developers:** Building moats around mediocre software stops working. The only sustainable strategy is building things users actually want, in ways they actually want them. Real alignment becomes the only competitive advantage.

**For platforms:** Walled gardens become increasingly expensive to maintain. When users can trivially fork, modify, and redistribute, control becomes impossible. The platforms that survive will be the ones that embrace this, not fight it.

## Already Happening

Look around. Browser extensions that gut algorithmic feeds. Userscripts that remove dark patterns. AI agents that rewrite UIs on the fly. Local-first tools that sync peer-to-peer. The pattern is clear.

We're building Darc and Xenon because we see this future clearly. A browser built for agents. A framework designed for remixing. Tools that assume users will modify them, not tools that try to prevent it.

The software you use tomorrow will be fundamentally different from the software you use today. Not because developers decided to build it differently, but because users refused to accept anything less.

## What This Means for Darc

This is why Darc exists. Traditional browsers were built in an era when software was static, when users were passive consumers, when modification meant browser extensions hobbled by limited APIs.

Darc is built for a world where:
- Your agent needs to read, understand, and act on web pages
- You want to modify how sites behave, not just how they look
- Software should be inspectable, forkable, and remixable by default
- The browser is infrastructure, not a product

We're not building another browser. We're building the foundation for software that users actually control.

The future isn't about better apps. It's about apps that work for you, modified by you, aligned with you. Software that's fundamentally different.

---

*Darc is in early stages. If this vision resonates, join us on [Discord](#) or check the [GitHub](#). We're figuring this out together.*
`
  },
  {
    slug: 'introducing-xenon-and-darc',
    title: 'Introducing Xenon and Darc',
    date: '20.10.2025',
    content: `
Xenon is a framework for building desktop applications with the performance of native apps and the flexibility of the web.

It ships with a purpose-built browser engine called Darc. Darc focuses on app-like user interfaces and security, offering:

- A Rust core for performance
- Granular permissions and isolation
- A developer experience familiar to web engineers

This post outlines our motivation, core design choices, and what we're focusing on next.
`
  },
  {
    slug: 'security-model-deep-dive',
    title: 'Security model deep dive',
    date: '18.10.2025',
    content: `
Security is a first-class concern in Xenon. The sandbox isolates processes and resources, and a permission system constrains access.

Highlights:

- Separate contexts for rendering and privileged operations
- Capability-based permissions
- Clear boundaries for I/O, storage, and networking

We'll continue to publish concrete guides and examples for building secure apps with Xenon.
`
  }
]

export const getPostBySlug = slug => posts.find(p => p.slug === slug) || null

