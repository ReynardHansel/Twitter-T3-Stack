'use client';
import { signIn } from "next-auth/react";

export default function LoginButton() {
 return (
    <button onClick={() => void signIn()}>Log In</button>
 );
}