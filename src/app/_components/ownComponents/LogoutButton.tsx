"use client";
import { signOut } from "next-auth/react";
import { IconHoverEffect } from "../IconHoverEffect";
import { VscSignOut } from "react-icons/vsc";

export default function LogoutButton() {
  return (
    <button onClick={() => void signOut()}>
      <IconHoverEffect>
        <span className="flex items-center gap-4">
          <VscSignOut className="h-8 w-8 fill-red-700" />
          <span className="hidden text-lg text-red-700 md:inline">
            Log Out
          </span>
        </span>
      </IconHoverEffect>
    </button>
  );
}
