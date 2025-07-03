import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Contact Manager",
  description: "Learn more about the Contact Manager application",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Contact Manager</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-4">
          Contact Manager is a demonstration application built to showcase Next.js 15 features 
          including the App Router, dynamic routes, API routes, and more.
        </p>
        <p>
          This application serves as a learning tool to understand how modern React applications 
          are built using the Next.js framework.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-3">Features Demonstrated</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>App Router & Routing</li>
          <li>Dynamic Routes with Slugs</li>
          <li>API Routes</li>
          <li>Server Components vs Client Components</li>
          <li>Data Fetching with JSON Server</li>
          <li>Image Optimization with Next.js</li>
          <li>CSS and Styling in Next.js</li>
          <li>SEO Optimization with Metadata</li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p>
          For more information about this demo application, please contact us at:
          <a href="mailto:demo@example.com" className="text-blue-600 ml-2 hover:underline">
            demo@example.com
          </a>
        </p>
      </div>
    </div>
  );
}
