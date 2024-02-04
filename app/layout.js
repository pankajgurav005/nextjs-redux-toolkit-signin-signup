import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/providers";
import { stores } from "../redux/store";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;

  console.log('isLoggedIn ======================', isLoggedIn);

  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="min-h-screen">
            <div className='flex flex-wrap'>
              <div className='w-1/5 h-dvh bg-slate-700'>
                <Sidebar />
              </div>
              <div className='w-4/5'>
                <Header isLoggedIn={isLoggedIn} />
                <div className="mt-16 ml-4">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
