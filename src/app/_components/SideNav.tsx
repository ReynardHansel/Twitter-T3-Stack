import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import LoginButton from "./ownComponents/LoginButton";
import LogoutButton from "./ownComponents/LogoutButton"

export default async function SideNav() {
  const session = await getServerAuthSession();
  const user = session?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user && (
          <li>
            <Link href={`/profiles/${user.id}`}>Profile</Link>
          </li>
        )}
        {user == null ? (
          <li>
            <LoginButton />
          </li>
        ) : (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}
