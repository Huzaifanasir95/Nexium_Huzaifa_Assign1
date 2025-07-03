# Day 3: Server Components vs Client Components in Next.js

This folder contains examples and demonstrations of Server Components and Client Components in Next.js.

## Overview

Next.js introduces a new way to build React applications with Server Components. This model allows developers to build applications that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.

## Key Concepts

### Server Components
- Render on the server only
- Zero impact on bundle size
- Can access backend resources directly
- Cannot use hooks or browser APIs
- Better performance and SEO

### Client Components
- Include the `'use client'` directive
- Can use React hooks and browser APIs
- Provide interactivity
- Add to the JavaScript bundle size
- Hydrated on the client after server pre-rendering

## Folder Structure

```
Day3/
├── components/
│   ├── client/
│   │   └── ProjectCounter.tsx  # Example Client Component
│   └── server/
│       └── UserProfile.tsx     # Example Server Component
└── pages/
    └── ComponentsDemo.tsx      # Page demonstrating both component types
```

## How to Run

To see these components in action, navigate to `/day3` in your Next.js application.

## Learning Path

1. Understand the difference between Server and Client Components
2. Learn when to use each type of component
3. Understand the rendering and hydration process
4. Apply best practices for component composition

## Further Reading

- [Next.js Documentation on Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [React Server Components RFC](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
- [React.js Documentation](https://react.dev/)
