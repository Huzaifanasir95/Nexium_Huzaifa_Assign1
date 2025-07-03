import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h2 className="text-3xl font-bold mb-4">Contact Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the contact you are looking for does not exist or has been deleted.
      </p>
      <Link 
        href="/contacts" 
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
      >
        Return to Contacts
      </Link>
    </div>
  );
}
