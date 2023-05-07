'use client'
import { signIn } from 'next-auth/react';
import Image from 'next/image';

import { icon } from '../app/assets';

function Login() {
  return (
    <div className=" bg-gptGreen h-screen flex flex-col items-center justify-center text-center">
        <Image 
            src={icon}
            width={200}
            height={200}
            alt="logo"
        />
        <button className="text-white px-3 py-2 font-bold text-3xl animate-pulse"
          onClick={() => signIn('google')}
        >
            Sign In to use ChatGPT 2.0
        </button>
    </div>
  )
}

export default Login