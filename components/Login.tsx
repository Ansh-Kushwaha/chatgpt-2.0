'use client'
import { signIn } from 'next-auth/react';
import Image from 'next/image';

import { icon } from '../app/assets';

function Login() {
  return (
    <div className=" bg-white h-screen flex flex-col items-center justify-center text-center">
        <Image src={icon} alt="ChatGPT 2.0" width={40} height={40} className="my-5" />
        <p className="text-sm font-semibold my-1">Welcome to ChatGPT 2.0</p>
        <p className="text-sm my-1">Log in with your Google account to continue</p>
        <button className="px-3 py-2 my-1 text-sm bg-gptGreen text-white rounded-lg"
          onClick={() => signIn('google')}
        >
            Log in
        </button>
    </div>
  )
}

export default Login