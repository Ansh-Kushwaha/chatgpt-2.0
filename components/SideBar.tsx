'use client'

import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
function SideBar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="p-2 flex flex-col h-screen text-white">
        <div className="flex-1">
            <div>
                {/* NewChat */}
                <NewChat />
                <div>
                    {/* Model Selection */}
                </div>

                {/* Map through the ChatRows */}
            </div>
        </div>
        <button className="flex w-full justify-start items-center px-2 py-2 rounded-md text-white hover:bg-primary gap-2.5">
          {session && (
          <img src={session.user?.image! } alt = "Profile Picture" 
            className="h-6 w-6 rounded-sm cursor-pointer hover:opacity-50 ml-[0.5]"
            onClick={() => {signOut()}}
          />
          
          )}
          {session && (
            <div className="w-full flex justify-start items-center">
              {session.user?.name!}
            </div>)} 
            {session && (
              <EllipsisHorizontalIcon className="text-gray-500 h-8 w-8"/>
              )}    
        </button>
    </div>
  )
}

export default SideBar
