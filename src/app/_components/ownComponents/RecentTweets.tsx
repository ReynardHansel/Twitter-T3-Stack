"use client";

import { InfiniteTweetList } from "../InfiniteTweetList";
import { api } from "~/trpc/react";

export function RecentTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery(
    {},
    { getNextPageParam: (lastPage) => lastPage.nextCursor },
  );

  return <InfiniteTweetList tweets={tweets} />;
}
