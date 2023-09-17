"use client";

import { signOut, useSession } from "next-auth/react";
import { SearchBar } from "./SearchBar";
import { LoginButton } from "./LoginButton";
import Image from "next/image";

export const ProfileIcon = () => {
  const session = useSession();
  console.log(session);

  if (session.status === "unauthenticated") {
    return <LoginButton />;
  }

  if (session.status === "authenticated") {
    return (
      <div onClick={() => signOut()}>
        <img
          className="rounded-full cursor-pointer hover:opacity-90"
          src={session.data.user?.image as string}
          height={50}
          width={50}
        />
      </div>
    );
  }
};
