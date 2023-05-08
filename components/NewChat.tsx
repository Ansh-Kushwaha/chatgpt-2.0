import { dataBase } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/solid';
import { addDoc,collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(collection(dataBase, 'users', session?.user?.email!, 'chats'), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    });

    router.push('/chat/${doc.id}')
  }

  return (
    <div className="chatRow border border-gray-700" onClick={createNewChat}>
        <PlusIcon className="h-4 w-4"/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat