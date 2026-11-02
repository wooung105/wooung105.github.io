import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    series: z.string().trim().min(1).refine((name) => !/[\\/]/.test(name) && name !== '.' && name !== '..', '시리즈 이름에는 슬래시를 사용할 수 없습니다.').optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
