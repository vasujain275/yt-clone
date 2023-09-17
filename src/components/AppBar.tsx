"use client";

import { SearchBar } from "./SearchBar";
import Image from "next/image";
import { ProfileIcon } from "./ProfileIcon";

export const AppBar = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="inline-flex items-center">
        <Image src="/logo.png" alt="Youtube" height={450} width={150} />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="inline-flex items-center">
        <ProfileIcon />
      </div>
    </div>
  );
};
