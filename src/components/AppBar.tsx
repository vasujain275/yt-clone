import { SearchBar } from "./SearchBar";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { LoginButton } from "./buttons.component";

export const AppBar = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="inline-flex items-center">
        <Image src="/logo.png" alt="Youtube" height={450} width={150} />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="inline-flex items-center m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <LoginButton />
    </div>
  );
};
