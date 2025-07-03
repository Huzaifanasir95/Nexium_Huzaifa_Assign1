import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center text-center max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to Contact Manager</h1>
        <p className="text-xl mb-8">
          A simple and efficient way to manage your contacts
        </p>
        
        <div className="flex justify-center mb-10">
          <Image 
            src="/contact-hero.png" 
            alt="Contact Manager Hero"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 w-full">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Organize Contacts</h2>
            <p>Keep all your important contacts in one place with easy access.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Quick Search</h2>
            <p>Find contacts instantly with our powerful search functionality.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Easy Management</h2>
            <p>Add, edit, and delete contacts with just a few clicks.</p>
          </div>
        </div>

        <Link
          href="/contacts"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}
