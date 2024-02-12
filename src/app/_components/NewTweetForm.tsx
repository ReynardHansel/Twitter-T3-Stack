'use client'

import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { getServerAuthSession } from "~/server/auth";
import TextArea_TweetForm from "./ownComponents/TextArea_TweetForm";
import { api } from "~/trpc/react";
// import { api } from "./../../trpc/server";

export default async function NewTweetForm() {
  // const createTweet = api.tweet.create.mutate()
  const createTweet = api.tweet.create.useMutation()
  const session = await getServerAuthSession();
  // console.log(session);

  if (!session)
    return (
      <p>
        Something wrong with session fetching, probly you're not logged in or
        something
      </p>
    );

  function handleSubmit(){

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.user.image} />
        <TextArea_TweetForm />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
