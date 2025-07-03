import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ContactPageProps = {
  params: {
    id: string;
  };
};

// Dynamic metadata based on the contact
export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  // Fetch data
  const contact = await getContact(params.id);
  
  // Fallback if contact not found
  if (!contact) {
    return {
      title: "Contact Not Found",
    };
  }
  
  return {
    title: `${contact.name} | Contact Manager`,
    description: `Contact details for ${contact.name}`,
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
    // In a real app, we'd handle this differently
    const fallbackContacts = [
      { id: "1", name: "John Doe", email: "john@example.com", phone: "555-1234", category: "work" },
      { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "555-5678", category: "family" },
      { id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "555-9012", category: "friend" },
    ];
    
    return fallbackContacts.find(contact => contact.id === id) || null;
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const contact = await getContact(params.id);
  
  if (!contact) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/contacts" 
          className="text-blue-600 hover:underline"
        >
          ← Back to Contacts
        </Link>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">{contact.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Email:</span> 
                <a href={`mailto:${contact.email}`} className="text-blue-600 ml-2 hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span> 
                <a href={`tel:${contact.phone}`} className="text-blue-600 ml-2 hover:underline">
                  {contact.phone}
                </a>
              </li>
              <li>
                <span className="font-medium">Category:</span>
                <span className="inline-block ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {contact.category}
                </span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link
              href={`/contacts/${contact.id}/edit`}
              className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded text-center transition duration-300"
            >
              Edit Contact
            </Link>
            <button
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-center transition duration-300"
              onClick={() => alert('Delete functionality would be implemented here')}
            >
              Delete Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
