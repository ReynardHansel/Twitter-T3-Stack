"use client";

import ProfileImage from "../ProfileImage";
import TextArea_TweetForm from "./TextArea_TweetForm";
import Button from "../Button";
import { api } from "~/trpc/react";
import { FormEvent, useEffect } from "react";
import { useState } from "react";

type FormProps = {
  usrImg: string;
};

export default function Form({ usrImg }: FormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const createTweet = api.tweet.create.useMutation({
    // onSuccess: (newTweet) => {
    //   console.log("logged before")
    //   console.log(newTweet);
    //   console.log("logged after")
    //   setInputValue("");
    // },
    onSuccess: (newTweet) => {
      console.log("Tweet created successfully:", newTweet);
      setInputValue("");
    },
    onError: (error) => {
      console.error("Failed to create tweet:", error);
    },
  });


  //* Function is working, we can continue the tutorial now it would seem
  function handleSubmit(e: FormEvent) {
    // console.log("handleSubmit clicked")
    // console.log(`inputValue: ${inputValue}`)

    e.preventDefault();
    createTweet.mutate({ content: inputValue });
  }

  //* To check if the input value is successfully changing
  // useEffect(() => {
  //   console.log(inputValue)
  // }, [inputValue])

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 border-b px-4 py-2"
    >
      <div className="flex gap-4">
        <ProfileImage src={usrImg} />
        <TextArea_TweetForm value={inputValue} onChange={setInputValue} />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
