import UserProfile from '../components/server/UserProfile';
import ProjectCounter from '../components/client/ProjectCounter';
import { Suspense } from 'react';

// This is a Server Component by default
export default function ComponentsDemo() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Next.js Server & Client Components</h1>
        <p className="text-gray-600">
          Understanding the differences between Server and Client Components in Next.js
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Server Component</h2>
          <div className="mb-4 p-4 bg-blue-50 rounded-md">
            <h3 className="font-semibold mb-2">Advantages:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Reduced client-side JavaScript</li>
              <li>Direct access to data sources</li>
              <li>Secure data fetching (API keys stay on server)</li>
              <li>Improved initial page load performance</li>
              <li>SEO friendly with complete HTML</li>
            </ul>
          </div>
          
          <div className="mb-4 p-4 bg-red-50 rounded-md">
            <h3 className="font-semibold mb-2">Limitations:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cannot use React hooks (useState, useEffect, etc.)</li>
              <li>No access to browser APIs</li>
              <li>Cannot add event listeners</li>
              <li>No access to component lifecycle methods</li>
              <li>Cannot maintain state between renders</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading user profile...</div>}>
              <UserProfile />
            </Suspense>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b">Client Component</h2>
          <div className="mb-4 p-4 bg-green-50 rounded-md">
            <h3 className="font-semibold mb-2">Advantages:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Can use React hooks</li>
              <li>Interactive with event handlers</li>
              <li>Access to browser APIs (localStorage, etc.)</li>
              <li>State management between renders</li>
              <li>Real-time updates and user interactions</li>
            </ul>
          </div>
          
          <div className="mb-4 p-4 bg-red-50 rounded-md">
            <h3 className="font-semibold mb-2">Limitations:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Increases JavaScript bundle size</li>
              <li>Cannot directly access server resources</li>
              <li>Additional client-side hydration time</li>
              <li>Potentially slower initial load</li>
              <li>May show loading states during hydration</li>
            </ul>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <ProjectCounter />
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Client Component Rendering Behavior</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-semibold mb-2 text-purple-700">Server-Side Pre-rendering</h3>
            <p className="text-sm text-gray-700">
              Even though it&apos;s a Client Component, Next.js still pre-renders it on the server as HTML for the initial load.
              This gives a faster First Contentful Paint but the component is not interactive yet.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-semibold mb-2 text-purple-700">Hydration</h3>
            <p className="text-sm text-gray-700">
              After initial HTML is loaded, React &quot;hydrates&quot; the component on the client, attaching event listeners
              and creating the component instance with its hooks and state.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-semibold mb-2 text-purple-700">Fully Interactive</h3>
            <p className="text-sm text-gray-700">
              Once hydrated, the component behaves like a normal React component with full interactivity.
              State updates trigger re-renders, event handlers work, etc.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary and Next Steps</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✓</span>
            <span><strong>Server Components</strong> are ideal for content-heavy parts of your UI that don&apos;t need client-side interactivity.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✓</span>
            <span><strong>Client Components</strong> should be used when you need interactivity, browser APIs, or React hooks.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✓</span>
            <span>Use a <strong>mix of both</strong> for optimal performance. Keep Client Components as small and focused as possible.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-600">✓</span>
            <span>Remember the rule: move Client Components <strong>down</strong> your component tree to minimize the JavaScript bundle.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
