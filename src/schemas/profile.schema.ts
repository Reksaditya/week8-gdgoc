import { z } from "zod"

export const createProfileSchema = z.object({
  bio: z.string().optional(),
  authorId: z.number(),
})