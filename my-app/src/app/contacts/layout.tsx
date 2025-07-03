import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts | Contact Manager",
  description: "Manage your contacts efficiently",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="contacts-layout">
      <div className="bg-blue-50 p-4 mb-6 rounded-lg border border-blue-200">
        <h2 className="text-lg font-semibold mb-2">Contacts Management</h2>
        <p className="text-sm text-gray-600">
          Here you can view, add, edit, and delete your contacts. Click on a contact to view more details.
        </p>
      </div>
      {children}
    </div>
  );
}
