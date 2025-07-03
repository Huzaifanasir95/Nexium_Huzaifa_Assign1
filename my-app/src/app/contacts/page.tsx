import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacts | Contact Manager",
  description: "View and manage your contacts",
};

// Server Component - fetches data on the server
async function getContacts() {
  // In a real application, we would use fetch with an actual API endpoint
  // For demo purposes, we're importing the data directly to simulate server-side data fetching
  const res = await fetch('http://localhost:4000/contacts', { cache: 'no-store' });
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch contacts');
  }
  
  return res.json();
}

export default async function ContactsPage() {
  // Fetch contacts data server-side
  let contacts = [];
  
  try {
    contacts = await getContacts();
  } catch (error) {
    console.error("Error fetching contacts:", error);
    // Using a fallback in case JSON Server isn't running
    contacts = [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234", category: "work" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678", category: "family" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-9012", category: "friend" },
    ];
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <Link 
          href="/contacts/add" 
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300"
        >
          Add New Contact
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{contact.name}</h2>
              <p className="text-gray-600">{contact.email}</p>
              <p className="text-gray-600">{contact.phone}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {contact.category}
              </span>
            </div>
            <div className="flex space-x-2">
              <Link 
                href={`/contacts/${contact.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded transition duration-300"
              >
                View
              </Link>
              <Link 
                href={`/contacts/${contact.id}/edit`}
                className="bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-3 rounded transition duration-300"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
