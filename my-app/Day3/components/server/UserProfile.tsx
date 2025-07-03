// This is a Server Component
// No 'use client' directive is needed

import { Suspense } from 'react';

// Server components can directly fetch data without useEffect
async function fetchData() {
  // In a real app, this would be a database or API call
  // Simulating network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    user: {
      name: 'Jane Doe',
      role: 'Developer',
      joinDate: 'June 15, 2025',
      projects: ['NextJS Demo', 'React UI Library', 'API Gateway']
    }
  };
}

export default async function UserProfile() {
  // Fetch data directly in server component
  const data = await fetchData();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {data.user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{data.user.name}</h2>
          <p className="text-gray-600">{data.user.role}</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <p className="mb-2"><span className="font-medium">Joined:</span> {data.user.joinDate}</p>
        
        <div className="mt-4">
          <h3 className="font-medium mb-2">Projects:</h3>
          <ul className="list-disc list-inside">
            {data.user.projects.map((project, index) => (
              <li key={index} className="text-gray-700">{project}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This is a Server Component. It fetches data directly without useEffect 
          and doesn't have client-side interactivity.
        </p>
      </div>
    </div>
  );
}
