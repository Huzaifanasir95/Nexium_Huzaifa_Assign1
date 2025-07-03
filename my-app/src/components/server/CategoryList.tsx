// Server Component (default in Next.js App Router)
import Link from 'next/link';

type Category = {
  id: number;
  name: string;
};

// Server-side data fetching function
async function getCategories() {
  // In a real app, we would fetch from a database or API
  // This simulates a server-side fetch
  return [
    { id: 1, name: "work" },
    { id: 2, name: "family" },
    { id: 3, name: "friend" }
  ];
}

export default async function CategoryList() {
  // Data is fetched during server rendering
  const categories = await getCategories();
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Categories (Server Component)</h2>
      
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <Link 
              href={`/contacts?category=${category.name}`}
              className="text-blue-600 hover:underline"
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This is a server component with server-side data fetching.
          Notice how there's no loading state and the data is already available on page load.
        </p>
      </div>
    </div>
  );
}
