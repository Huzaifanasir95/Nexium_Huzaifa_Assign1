'use client';
// The 'use client' directive marks this as a Client Component

import { useState, useEffect } from 'react';

export default function ProjectCounter() {
  // Client Components can use React hooks
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<string[]>([]);

  // Using useEffect for client-side data fetching
  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProjects = async () => {
      setLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data
      setProjects([
        'E-commerce Platform',
        'Content Management System',
        'Mobile Banking App',
        'Social Media Dashboard',
        'Analytics Portal'
      ]);
      
      setLoading(false);
    };
    
    fetchProjects();
  }, []);

  // Client-side event handler
  const handleAddProject = () => {
    const newProject = `New Project ${count + 1}`;
    setProjects([...projects, newProject]);
    setCount(count + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Client-side loading state */}
      {loading ? (
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
          <p className="ml-3 text-gray-600">Loading projects...</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Project Management</h2>
            <button 
              onClick={handleAddProject}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
              Add Project
            </button>
          </div>
          
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li 
                key={index} 
                className="p-3 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition duration-200"
              >
                {project}
              </li>
            ))}
          </ul>
          
          <div className="mt-4 text-right">
            <span className="text-sm text-gray-600">
              Total Projects: <strong>{projects.length}</strong>
            </span>
          </div>
        </>
      )}
      
      <div className="mt-4 p-3 bg-green-50 rounded-md">
        <p className="text-sm text-green-800">
          <strong>Note:</strong> This is a Client Component. It uses React hooks (useState, useEffect)
          and has client-side interactivity.
        </p>
      </div>
    </div>
  );
}
