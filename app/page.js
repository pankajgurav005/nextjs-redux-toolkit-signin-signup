import React from 'react';
import Image from "next/image";
import Header from '@/components/Header';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;
  return (
    <main className="min-h-screen">
      <Header isLoggedIn={isLoggedIn}/>
    </main>
  );
}
