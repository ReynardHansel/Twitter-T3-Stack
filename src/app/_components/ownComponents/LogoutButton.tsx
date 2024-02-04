'use client';
import { signOut } from "next-auth/react";

export default function LogoutButton() {
 return (
    <button onClick={() => void signOut()}>Log Out</button>
 );
}