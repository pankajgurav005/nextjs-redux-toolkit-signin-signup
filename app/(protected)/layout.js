import Header from '@/components/Header';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function ProtectedPageLayout({ children }) {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;

  if (!isLoggedIn) {
    redirect('/noaccess');
  }

  return (
    <>
      <main className="min-h-screen">
        <Header isLoggedIn={isLoggedIn} />
        <div>{children}</div>
      </main>
    </>
  )
}