import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { getServerAuthSession } from "~/server/auth";
import TextArea_TweetForm from "./ownComponents/TextArea_TweetForm";

export default async function NewTweetForm() {
  const session = await getServerAuthSession();
  // console.log(session);
  if (!session) return(
    <p>Something wrong with session fetching, probly you're not logged in or something</p>
  );

  return (
    <form className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfileImage src={session.user.image} />
        <TextArea_TweetForm />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
}
