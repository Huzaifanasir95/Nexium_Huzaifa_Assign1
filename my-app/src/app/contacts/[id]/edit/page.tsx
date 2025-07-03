import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type EditContactPageProps = {
  params: {
    id: string;
  };
};

// Dynamic metadata based on the contact
export async function generateMetadata({ params }: EditContactPageProps): Promise<Metadata> {
  // Fetch data
  const contact = await getContact(params.id);
  
  // Fallback if contact not found
  if (!contact) {
    return {
      title: "Contact Not Found",
    };
  }
  
  return {
    title: `Edit ${contact.name} | Contact Manager`,
    description: `Edit contact details for ${contact.name}`,
  };
}

// Server Component - fetches individual contact data
async function getContact(id: string) {
  try {
    const res = await fetch(`http://localhost:4000/contacts/${id}`, { cache: 'no-store' });
    
    if (!res.ok) {
      return null;
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching contact:", error);
    
    // Fallback data for demonstration when JSON server isn't running
    const fallbackContacts = [
      { id: "1", name: "John Doe", email: "john@example.com", phone: "555-1234", category: "work" },
      { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "555-5678", category: "family" },
      { id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "555-9012", category: "friend" },
    ];
    
    return fallbackContacts.find(contact => contact.id === id) || null;
  }
}

export default async function EditContactPage({ params }: EditContactPageProps) {
  const contact = await getContact(params.id);
  
  if (!contact) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href={`/contacts/${params.id}`} 
          className="text-blue-600 hover:underline"
        >
          ← Back to Contact Details
        </Link>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Edit Contact: {contact.name}</h1>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={contact.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={contact.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                defaultValue={contact.phone}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={contact.category}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="work">Work</option>
                <option value="family">Family</option>
                <option value="friend">Friend</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Link
              href={`/contacts/${params.id}`}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert('Update contact functionality would be implemented here');
              }}
            >
              Update Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
