import { dataBase } from '@/firebase';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';

type ChatRowProps = {
    id: string;
}

function ChatRow( {id}: ChatRowProps ) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session} = useSession();
  const [active, setActive] = useState(false);

  const [messages, loading, error] = useCollection(
    collection(dataBase, 'users', session?.user?.email!, 'chats', id, 'messages')
  );

  useEffect(() => {
    if(!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  return (
    <a href={`/chat/${id}`} className={`flex flex-row justofy-center w-full gap-2 chatRow ${active && 'bg-primary/7 0'}`}>
      <ChatBubbleLeftIcon className="h-5 w-5 text-gray-700 hover:text-white" />
      <p className="text-sm flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </a>
  )
}

export default ChatRow