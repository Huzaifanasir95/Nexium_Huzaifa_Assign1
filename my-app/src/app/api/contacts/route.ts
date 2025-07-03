import { NextResponse } from 'next/server';

// Define a type for our contact data
type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
};

// GET handler for /api/contacts
export async function GET() {
  try {
    // In a real application, we'd fetch from a database
    // For demo purposes, we're using hardcoded data
    const contacts: Contact[] = [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234", category: "work" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678", category: "family" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-9012", category: "friend" },
    ];
    
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

// POST handler for /api/contacts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the incoming data
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }
    
    // In a real app, we would save the contact to a database
    // and return the saved contact with a generated ID
    const newContact = {
      id: Date.now(), // Simple ID generation for demo
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      category: body.category || "other",
    };
    
    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
