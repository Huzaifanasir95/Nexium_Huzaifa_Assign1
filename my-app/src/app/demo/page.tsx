import type { Metadata } from "next";
import CategorySelector from "@/components/client/CategorySelector";
import CategoryList from "@/components/server/CategoryList";

export const metadata: Metadata = {
  title: "Component Demo | Contact Manager",
  description: "Demo of Server Components vs Client Components in Next.js",
};

// This is a Server Component by default
export default function DemoPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Server Component</h2>
          <p className="mb-4 text-gray-700">
            Server Components render on the server and send HTML to the client.
            They can access server resources directly and reduce JavaScript sent to the client.
          </p>
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Can access server resources directly (databases, filesystem)</li>
              <li>No client-side JavaScript bundle</li>
              <li>Always rendered on the server</li>
              <li>Can&apos;t use hooks or browser APIs</li>
              <li>Better performance for static or infrequently updated content</li>
            </ul>
          </div>
          <CategoryList />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Client Component</h2>
          <p className="mb-4 text-gray-700">
            Client Components render on the client and can use React hooks and browser APIs.
            They&apos;re interactive and can respond to user events.
          </p>
          <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Can use React hooks (useState, useEffect, etc.)</li>
              <li>Can access browser APIs</li>
              <li>Interactive with event handlers</li>
              <li>Adds to client JavaScript bundle size</li>
              <li>Can be pre-rendered on server, then hydrated on client</li>
            </ul>
          </div>
          <CategorySelector />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Server Actions (Experimental)</h2>
        <p className="mb-4">
          Server Actions allow forms to submit directly to server functions without client JavaScript.
          Here&apos;s a simple example:
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
            {`// This is server-side code that runs when the form is submitted
async function addContact(formData) {
  'use server';
  const name = formData.get('name');
  const email = formData.get('email');
  // Add to database...
  redirect('/contacts');
}`}
          </pre>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            {`// This form doesn't need client JS to work
export default function ContactForm() {
  return (
    <form action={addContact}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Add Contact</button>
    </form>
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
