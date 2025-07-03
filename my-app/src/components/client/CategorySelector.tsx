'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Category = {
  id: number;
  name: string;
};

export default function CategorySelector() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Client-side data fetching
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        // In a real app, we would fetch from an API
        // For demo, using a timeout to simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Sample data (normally from API)
        const data = [
          { id: 1, name: "work" },
          { id: 2, name: "family" },
          { id: 3, name: "friend" }
        ];
        
        setCategories(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load categories');
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Client-side event handling
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Showing loading state (client-side only feature)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading categories...</span>
      </div>
    );
  }

  // Error handling (client-side only feature)
  if (error) {
    return (
      <div className="text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Filter by Category (Client Component)</h2>
      
      <div className="flex items-center">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </option>
          ))}
        </select>
        
        {selectedCategory && (
          <div className="ml-4">
            <p>Selected: <strong>{selectedCategory}</strong></p>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This is a client component with client-side data fetching and interactivity.
          Notice how it manages loading states and handles user interactions.
        </p>
      </div>
    </div>
  );
}
