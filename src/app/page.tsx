"use client";
import { Separator } from "@/components/ui/separator";
import LinksCard from "../features/linkCard/LinkCard";
import UserCard from "@/features/userCard/UserCard";

export default function Home() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col py-32 px-40">
        <div className="flex justify-between">
          <div className="flex flex-col my-4 w-screen">
            <h1 className="font-bold text-4xl my-8">Profile</h1>
            <UserCard></UserCard>
            <Separator className="bg-white" />
            <div className="my-10">
              <h1 className="font-bold text-4xl">Quickstart</h1>
              <div className="my-12 flex flex-wrap space-x-12 space-y-8">
                <LinksCard></LinksCard>
                <LinksCard></LinksCard>
                <LinksCard></LinksCard>
              </div>
            </div>
          </div>
          <div className="border-2 border-white bg-black w-1/2 rounded-md p-8 translate-y-16 h-screen">
            <div className="space-y-2">
              <h1 className="font-bold text-4xl">Activity</h1>
              <p className="opacity-50">as of {formattedDate} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
