import './globals.css';

import { Inter } from 'next/font/google';
import Sidebar from '@/components/SideBar';
import Login from '@/components/Login';
import { getServerSession, Session } from 'next-auth';

import { SessionProvider } from '../components/SessionProvider';
import { GET } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT 2.0',
  description: 'A chatbot that can talk about anything.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session: Session | null= await getServerSession(GET)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
          <div className="flex">
            {/* Sidebar */}
            <div className="bg-tertiary sm:w-[260px] sm:flex hidden flex-shrink-0 overflow-x-hidden h-screen overflow-y-hidden">
              <Sidebar />
            </div>
            {/* ClientProvider */}
            <div></div>

            <div className="bg-primary flex-1">{children}</div>
          </div>
          )}
        </SessionProvider>
        </body>
    </html>
  )
}
