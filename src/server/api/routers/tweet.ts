import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const tweetRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ input: { content }, ctx }) => {
      const tweet = await ctx.db.tweet.create({
        data: { content, userId: ctx.session.user.id },
      });

      return tweet;
    }),
});

//* Notes:
//* - protectedProcedure = must be authenticated to be able to do what's inside the router (create tweet)
//* ctx: context variable
//* .mutation allows data manipulation
