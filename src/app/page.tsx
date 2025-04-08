'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserIcon } from '@heroicons/react/24/outline'
import { Separator } from '@/components/ui/separator'
import LinksCard from './components/linkCard'

export default function Home() {
  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = currentDate.toLocaleDateString('en-US', options)

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col py-32 px-40">
        <div className="flex justify-between">
          <div className="flex flex-col my-4 w-screen">
            <h1 className="font-bold text-4xl my-8">Profile</h1>
            <div className="flex space-x-4 my-4">
              <Avatar className="w-28 h-28">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-1.5">
                <div className="flex space-x-3">
                  <h1 className="text-3xl font-bold">Sean Denzel Robenta</h1>
                  <div className="flex">
                    <div className="flex items-center bg-pink-700 text-black font-bold text-sm px-1.5">
                      123
                    </div>
                  </div>
                </div>
                <div className="text-sm flex flex-col space-y-1">
                  <div className="flex items-center">
                    <UserIcon className="w-6 h-6"></UserIcon>
                    <p>
                      <span className="font-bold">Vice President</span>{' '}
                      <span className="opacity-50">
                        Research and Development
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="opacity-50">sean_robenta@dlsu.edu.ph</p>
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
  )
}
