import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().optional(),
    category: z.enum(['news', 'startups', 'business', 'investments', 'technology', 'research', 'interviews']),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    summary: z.string().optional(),
    keyPoints: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
    featured: z.boolean().default(false),
    sponsored: z.boolean().default(false),
    published: z.boolean().default(true),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    photo: z.string().optional(),
    role: z.string().optional(),
    bio: z.string().optional(),
    telegram: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

export const collections = { articles, authors };
