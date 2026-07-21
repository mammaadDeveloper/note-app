import {z} from 'zod';

export const NoteSchema = z.object({
  title: z.string().min(5),
  body: z.string().min(50)
});

export type NoteDto = z.infer<typeof NoteSchema>;
