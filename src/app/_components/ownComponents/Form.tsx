"use client";

import ProfileImage from "../ProfileImage";
import TextArea_TweetForm from "./TextArea_TweetForm";
import Button from "../Button";
import { api } from "~/trpc/react";
import { FormEvent } from "react";
import { useState } from "react";

type FormProps = {
  usrImg: string;
};

export default function Form({ usrImg }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const createTweet = api.tweet.create.useMutation({
    onSuccess: (newTweet) => {
      console.log(newTweet);
      setInputValue("");
    },
  });

  //* Function is working, we can continue the tutorial now it would seem
  function handleSubmit(e: FormEvent) {
    // console.log("handleSubmit clicked")

    e.preventDefault();
    createTweet.mutate({ content: inputValue });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 border-b px-4 py-2"
    >
      <div className="flex gap-4">
        <ProfileImage src={usrImg} />
        <TextArea_TweetForm value={inputValue} onChange={setInputValue} />
        {/* <p>Something changed</p> */}
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
