"use client";
import { Separator } from "@/components/ui/separator";
import LinksCard from "../features/linkCard/LinkCard";
import UserCard from "@/features/userCard/UserCard";
import { ActivityTab } from "@/features/activityTab/ActivityTab";

export default function Home() {
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
              </div>
            </div>
          </div>
          <ActivityTab></ActivityTab>
        </div>
      </div>
    </>
  );
}
