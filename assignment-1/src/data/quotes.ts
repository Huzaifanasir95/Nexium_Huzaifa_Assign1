export interface Quote {
  id: number;
  text: string;
  author: string;
  topic: string;
}

export const quotes: Quote[] = [
  // Success quotes
  {
    id: 1,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    topic: "success"
  },
  {
    id: 2,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    topic: "success"
  },
  {
    id: 3,
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    topic: "success"
  },

  // Love quotes
  {
    id: 4,
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    topic: "love"
  },
  {
    id: 5,
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    topic: "love"
  },
  {
    id: 6,
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    topic: "love"
  },

  // Motivation quotes
  {
    id: 7,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    topic: "motivation"
  },
  {
    id: 8,
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    topic: "motivation"
  },
  {
    id: 9,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    topic: "motivation"
  },

  // Wisdom quotes
  {
    id: 10,
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    topic: "wisdom"
  },
  {
    id: 11,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    topic: "wisdom"
  },
  {
    id: 12,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    topic: "wisdom"
  },

  // Happiness quotes
  {
    id: 13,
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    topic: "happiness"
  },
  {
    id: 14,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    topic: "happiness"
  },
  {
    id: 15,
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    topic: "happiness"
  },

  // Life quotes
  {
    id: 16,
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    topic: "life"
  },
  {
    id: 17,
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    topic: "life"
  },
  {
    id: 18,
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    topic: "life"
  },

  // Innovation quotes
  {
    id: 19,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    topic: "innovation"
  },
  {
    id: 20,
    text: "The secret to change is to focus all of your energy not on fighting the old, but on building the new.",
    author: "Socrates",
    topic: "innovation"
  },
  {
    id: 21,
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    topic: "innovation"
  },

  // Leadership quotes
  {
    id: 22,
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    topic: "leadership"
  },
  {
    id: 23,
    text: "The art of leadership is saying no, not saying yes. It is very easy to say yes.",
    author: "Tony Blair",
    topic: "leadership"
  },
  {
    id: 24,
    text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
    author: "Simon Sinek",
    topic: "leadership"
  }
];

// Function to get quotes by topic
export function getQuotesByTopic(topic: string): Quote[] {
  const filteredQuotes = quotes.filter(
    quote => quote.topic.toLowerCase() === topic.toLowerCase()
  );
  
  // Shuffle the array and return 3 random quotes
  const shuffled = filteredQuotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// Function to get all available topics
export function getAvailableTopics(): string[] {
  const topics = [...new Set(quotes.map(quote => quote.topic))];
  return topics.sort();
}
