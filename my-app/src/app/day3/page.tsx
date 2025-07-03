import type { Metadata } from "next";
import ComponentsDemo from "../../../Day3/pages/ComponentsDemo";

export const metadata: Metadata = {
  title: "Day 3 - Server vs Client Components | Next.js Demo",
  description: "Understanding Server and Client Components in Next.js",
};

export default function Day3Page() {
  return <ComponentsDemo />;
}
