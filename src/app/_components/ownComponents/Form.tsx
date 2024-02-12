'use client'

import ProfileImage from "../ProfileImage";
import TextArea_TweetForm from "./TextArea_TweetForm";
import Button from "../Button"

export default function Form({ onSubmit, session}:any) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.user.image} />
        <TextArea_TweetForm />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
