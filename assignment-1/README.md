# Quote Generator Web App - Assignment 1

A beautiful, responsive Quote Generator built with Next.js 15 and ShadCN UI.

## Features

- 🎨 Modern, responsive design using ShadCN UI components
- 📝 Form validation with React Hook Form and Zod
- 💾 Local data source with 24 quotes across 8 topics
- ⚡ Fast, optimized with Next.js 15 App Router
- 🎯 Topic-based quote filtering
- 📱 Mobile-friendly responsive design
- 🌟 Loading states and error handling

## Available Topics

- Success
- Love
- Motivation
- Wisdom
- Happiness
- Life
- Innovation
- Leadership

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: ShadCN UI
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

1. Enter a topic in the search form (e.g., "success", "motivation", "love")
2. Click "Generate Quotes" or use one of the available topic buttons
3. View 3 randomly selected quotes related to your topic
4. Explore different topics to discover more inspiring quotes

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── ui/                 # ShadCN UI components
│   └── QuoteGenerator.tsx  # Main quote generator component
└── data/
    └── quotes.ts           # Local quotes database
```

## Features Implemented

✅ ShadCN UI form for topic input  
✅ Displays 3 quotes from local JSON/array  
✅ Beautiful, responsive design  
✅ Form validation and error handling  
✅ Loading states for better UX  
✅ Topic filtering functionality  
✅ SEO optimized with proper metadata  
✅ TypeScript for type safety  

## Deployment

This app is ready to be deployed to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## License

This project is part of Assignment 1 for the Nexium training program.

---

Built with ❤️ using Next.js 15 and ShadCN UI
