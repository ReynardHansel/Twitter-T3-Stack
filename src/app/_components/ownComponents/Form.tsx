'use client'

import ProfileImage from "../ProfileImage";
import TextArea_TweetForm from "./TextArea_TweetForm";
import Button from "../Button"
import { api } from "~/trpc/react";

export default function Form({ usrImg }) {
  const createTweet = api.tweet.create.useMutation()

  function handleSubmit(){
    //* Function is working, we can continue the tutorial now it would seem
    // console.log("handleSubmit clicked")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={usrImg} />
        <TextArea_TweetForm />
        {/* <p>Something changed</p> */}
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
