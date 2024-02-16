'use client'

import ProfileImage from "../ProfileImage";
import TextArea_TweetForm from "./TextArea_TweetForm";
import Button from "../Button"
import { api } from "~/trpc/react";

export default function Form() {
  const createTweet = api.tweet.create.useMutation()

  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        {/* <ProfileImage src={session.user.image} /> */}
        <TextArea_TweetForm />
        <p>Something changed</p>
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
