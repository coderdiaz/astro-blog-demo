import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    image: image().refine((img) => img.width >= 720, {
      message: "Cover image must be at least 720 pixels wide!",
    }).optional(),
  }),
})

export const collections = {
  'posts': postsCollection,
};
