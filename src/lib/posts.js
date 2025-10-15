export const posts = [
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

