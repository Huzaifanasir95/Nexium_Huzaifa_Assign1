'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { getQuotesByTopic, getAvailableTopics, Quote } from '@/data/quotes';

// Form validation schema
const formSchema = z.object({
  topic: z.string().min(1, {
    message: "Please enter a topic.",
  }),
});

export default function QuoteGenerator() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchedTopic, setSearchedTopic] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSearchedTopic(values.topic);
    
    // Simulate API call delay
    setTimeout(() => {
      const foundQuotes = getQuotesByTopic(values.topic);
      setQuotes(foundQuotes);
      setLoading(false);
    }, 1000);
  }

  const availableTopics = getAvailableTopics();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Quote Generator</h1>
        <p className="text-xl text-muted-foreground">
          Discover inspiring quotes on any topic
        </p>
      </div>

      {/* Form Card */}
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Find Quotes</CardTitle>
          <CardDescription>
            Enter a topic to get 3 inspiring quotes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., success, love, motivation"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormDescription>
                      Try topics like: {availableTopics.slice(0, 4).join(', ')}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Searching..." : "Generate Quotes"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Available Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Available Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {availableTopics.map((topic) => (
              <Button
                key={topic}
                variant="outline"
                size="sm"
                onClick={() => {
                  form.setValue('topic', topic);
                  onSubmit({ topic });
                }}
                disabled={loading}
                className="capitalize"
              >
                {topic}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Loading State */}
      {loading && (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Finding quotes about &quot;{searchedTopic}&quot;...</p>
        </div>
      )}

      {/* Quotes Display */}
      {quotes.length > 0 && !loading && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Quotes about &quot;{searchedTopic}&quot;
          </h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
            {quotes.map((quote, index) => (
              <Card key={quote.id} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <blockquote className="text-lg italic leading-relaxed">
                        &quot;{quote.text}&quot;
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <cite className="font-semibold not-italic">
                          — {quote.author}
                        </cite>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full capitalize">
                          {quote.topic}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* No Quotes Found */}
      {quotes.length === 0 && !loading && searchedTopic && (
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">No quotes found</h3>
            <p className="text-muted-foreground mb-4">
              Sorry, we couldn&apos;t find any quotes about &quot;{searchedTopic}&quot;.
            </p>
            <p className="text-sm text-muted-foreground">
              Try one of the available topics above or search for: {availableTopics.slice(0, 3).join(', ')}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
