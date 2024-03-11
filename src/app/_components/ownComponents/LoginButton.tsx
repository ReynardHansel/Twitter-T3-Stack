"use client";
import { signIn } from "next-auth/react";
import { IconHoverEffect } from "../IconHoverEffect";
import { VscSignIn } from "react-icons/vsc";

export default function LoginButton() {
  return (
    <button onClick={() => void signIn()}>
      <IconHoverEffect>
        <span className="flex items-center gap-4">
          <VscSignIn className="h-8 w-8 fill-green-700" />
          <span className="hidden text-lg text-green-700 md:inline">
            Log In
          </span>
        </span>
      </IconHoverEffect>
    </button>
  );
}
