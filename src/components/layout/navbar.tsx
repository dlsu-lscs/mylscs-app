"use client";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  return (
    <>
      <div className="absolute text-white py-4 px-6 flex items-center justify-between w-screen">
        <div className="flex items-center">
          <Image
            src="/lscs_white.png"
            alt="LSCS Logo"
            width={100}
            height={100}
          />
          <div className="flex-col">
            <h1 className="font-bold text-3xl">MyLSCS</h1>
            <p className="text-md">by La Salle Computer Society</p>
          </div>
        </div>
        <div className="px-12">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default NavBar;
