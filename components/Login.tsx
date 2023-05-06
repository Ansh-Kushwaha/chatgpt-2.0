'use client'
import { signIn } from 'next-auth/react';
import Image from 'next/image';

import { icon } from '../app/assets';

function Login() {
  return (
    <div>
        <Image 
            src={icon}
            width={300}
            height={300}
            alt="logo"
        />
        <button>
            Sign In to use ChatGPT 2.0
        </button>
    </div>
  )
}

export default Login