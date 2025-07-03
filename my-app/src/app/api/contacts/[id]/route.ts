import { NextResponse } from 'next/server';

// Define a type for our contact data
type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
};

// Mock database for demo purposes
const mockContacts: Contact[] = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234", category: "work" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678", category: "family" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-9012", category: "friend" },
];

// GET handler for /api/contacts/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Find the contact by ID
    const contact = mockContacts.find((c) => c.id === id);
    
    if (!contact) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(contact);
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact" },
      { status: 500 }
    );
  }
}

// PUT handler for /api/contacts/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    
    // Validate the incoming data
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }
    
    // Find the contact index
    const index = mockContacts.findIndex((c) => c.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }
    
    // Update the contact (in a real app, we would update the database)
    const updatedContact = {
      ...mockContacts[index],
      name: body.name,
      email: body.email,
      phone: body.phone || mockContacts[index].phone,
      category: body.category || mockContacts[index].category,
    };
    
    // Return the updated contact
    return NextResponse.json(updatedContact);
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    );
  }
}

// DELETE handler for /api/contacts/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Find the contact index
    const index = mockContacts.findIndex((c) => c.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: "Contact not found" },
        { status: 404 }
      );
    }
    
    // In a real app, we would delete from the database
    // Here we're just returning a success message
    
    return NextResponse.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
