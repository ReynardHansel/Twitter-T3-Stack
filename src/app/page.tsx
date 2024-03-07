import { api } from "~/trpc/server";
import { InfiniteTweetList } from "./_components/InfiniteTweetList";
import NewTweetForm from "./_components/NewTweetForm";
import { RecentTweets } from "./_components/ownComponents/RecentTweets";
import { getServerAuthSession } from "~/server/auth";
import SessionProvider from "./_components/ownComponents/SessionProvider"// import { getServerSession } from "next-auth";
// import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await getServerAuthSession();
  // const clientSession = await getServerSession()

  // if (!session) {
  //   return (
  //     <h1 className="text-center">You're not logged in</h1>
  //   );
  // }

  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <SessionProvider session={session}>
        <NewTweetForm />
        <RecentTweets />
      </SessionProvider>
    </>
  );
}
