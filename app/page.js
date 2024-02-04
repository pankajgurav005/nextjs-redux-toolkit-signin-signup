import React from 'react';
import Image from "next/image";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export default function Home() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;
  return (
    // <main className="min-h-screen">
    //   <div className='flex flex-wrap'>
    //     <div className='w-1/5 h-dvh bg-slate-700'>
    //       <Sidebar />
    //     </div>
    //     <div className='w-4/5'>
    //       <Header isLoggedIn={isLoggedIn} />
    //     </div>
    //   </div>
    // </main>
    <div>Home Page</div>
  );
}
