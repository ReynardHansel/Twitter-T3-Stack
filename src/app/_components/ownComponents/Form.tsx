"use client";

import ProfileImage from "../ProfileImage";
import TextArea_TweetForm from "./TextArea_TweetForm";
import Button from "../Button";
import { api } from "~/trpc/react";
import { FormEvent, useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";

type FormProps = {
  usrImg: string;
};

export default function Form({ usrImg }: FormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const { data: session, status } = useSession();
  const trpcUtils = api.useUtils();

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

      if (status !== "authenticated") return;

      trpcUtils.tweet.infiniteFeed.setInfiniteData({}, (oldData) => {
        if (oldData == null || oldData.pages[0] == null) return

        const newCacheTweet = {
          ...newTweet,
          likeCount: 0,
          likedByMe: false,
          user: {
            id: session.user.id,
            name: session.user.name,
            image: session.user.image,
          },
        };

        return {
          ...oldData,
          pages: [
            {
              ...oldData.pages[0],
              tweets: [newCacheTweet, ...oldData.pages[0].tweets]
            },
            ...oldData.pages.slice(1)
          ]
        }
      });
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
