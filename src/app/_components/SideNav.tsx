import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import LoginButton from "./ownComponents/LoginButton";
import LogoutButton from "./ownComponents/LogoutButton";
import { IconHoverEffect } from "./IconHoverEffect";
import { VscAccount, VscHome } from "react-icons/vsc";

export default async function SideNav() {
  const session = await getServerAuthSession();
  const user = session?.user;

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscHome className="h-8 w-8" />
                <span className="hidden text-lg md:inline">Home</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        {user && (
          <li>
            <Link href={`/profiles/${user.id}`}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscAccount className="h-8 w-8" />
                  <span className="hidden text-lg md:inline">Profile</span>
                </span>
              </IconHoverEffect>
            </Link>
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
