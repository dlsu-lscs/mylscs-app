import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "@heroicons/react/24/outline";
import { User } from "@/types/user";

export default function UserCard(props: User) {
  return (
    <>
      <div className="flex space-x-4 my-4">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-1.5">
          <div className="flex space-x-3">
            <h1 className="text-3xl font-bold">
              {props.name || "Lorem Ipsum Name"}
            </h1>
            <div className="flex">
              <div className="flex items-center bg-pink-700 text-black font-bold text-sm px-1.5">
                {props.idNum || "123"}
              </div>
            </div>
          </div>
          <div className="text-sm flex flex-col space-y-1">
            <div className="flex items-center">
              <UserIcon className="w-6 h-6"></UserIcon>
              <p>
                <span className="font-bold">
                  {props.position || "Vice President"}
                </span>{" "}
                <span className="opacity-50">
                  {props.committee || "Research and Development"}
                </span>
              </p>
            </div>
            <div>
              <p className="opacity-50">
                {props.email || "email_email@dlsu.edu.ph"}
              </p>
            </div>
            <div className="flex space-x-3 my-2">
              <div className="flex">
                <div className="flex bg-pink-700 text-black font-bold text-md py-0.5 px-2">
                  123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
