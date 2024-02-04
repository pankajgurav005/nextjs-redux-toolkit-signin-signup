import { closeModal, openModal, toggleModal } from "@/redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Header from "@/components/Header";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function About() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('access_token')?.value ? true : false;

  console.log('isLoggedIn ======================', isLoggedIn);

  if (!isLoggedIn) {
    redirect('/noaccess');
  }

  return(
    <>
      <div className="mt-16">Test About Page</div>
    </>
  )
}