import { api } from "~/trpc/server";
import { InfiniteTweetList } from "./_components/InfiniteTweetList";
import NewTweetForm from "./_components/NewTweetForm";
import { RecentTweets } from "./_components/ownComponents/RecentTweets";

export default async function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
      <RecentTweets />
    </>
  );
}