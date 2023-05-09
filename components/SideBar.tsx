'use client'

import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

import { EllipsisHorizontalIcon, ArrowTopRightOnSquareIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

function SideBar() {
  const { data: session } = useSession();
  console.log(session);

  const [linksVisible, setLinksVisible] = useState(false);

  return (
    <div className="p-2 flex flex-col w-full h-screen text-white">
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
        <div className="border-t border-white/20 pt-2 ">
          <button className="flex w-full justify-start items-center px-2 py-2 rounded-md text-white hover:bg-primary gap-2.5"
            onClick={() => setLinksVisible(!linksVisible)}
            aria-haspopup="true"
            aria-expanded="false"
          >
            {session && (
            <img src={session.user?.image! } alt = "Profile Picture" 
              className="h-6 w-6 rounded-sm cursor-pointer hover:opacity-50 ml-[0.5]"
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
          {linksVisible && (
          <div className="absolute bottom-[4rem] flex flex-col z-20 left-2 mb-2 w-[244px] overflow-hidden rounded-md bg-[#0D1117] py-1.5 translate-y-0">
            <a href="https://github.com/Ansh-Kushwaha/chatgpt-2.0" target="_blank" rel="noopener noreferrer"
              className="px-2 py-2 flex gap-2 text-sm items-center hover:bg-primary"
            >
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <p>Go to project</p>
            </a>

            <div className="my-1.5 h-[1px] bg-white/20 " />

            <div
              className="px-2 py-2 flex gap-2 text-sm items-center hover:bg-primary cursor-pointer"
              onClick={() => signOut()}
            >
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <p>Log out</p>
            </div>
          </div>)}
        </div>
    </div>
  )
}

export default SideBar
