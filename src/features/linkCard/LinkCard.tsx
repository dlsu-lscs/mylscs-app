import { WindowIcon } from "@heroicons/react/24/outline";
import { links } from "@/types/links";

const LinksCard = (props: links) => {
  return (
    <>
      <div className="flex">
        <div className="flex border-2 bg-black border-white rounded-md">
          <div className="pl-8  py-10 pr-16">
            <div className="flex justify-center text-left flex-col space-y-2">
              <div className="font-bold text-3xl">
                {props.title || "Links Title"}
              </div>
              <div className="flex opacity-50">
                <WindowIcon className="w-6 h-6"></WindowIcon>
                <p className="ml-2">{props.desc || "Links Description"}</p>
              </div>
              <div className="py-4">
                <button className="bg-white rounded-lg text-black p-3 text-sm">
                  {props.buttonText || "Button Text"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinksCard;
