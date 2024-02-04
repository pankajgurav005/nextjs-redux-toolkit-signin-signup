"use client"
import React, {useState} from "react";
import { closeModal, openModal, toggleModal } from "@/redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { postRequest } from "@/utils/api";

export default function Header({isLoggedIn}) {
  const dispatch = useDispatch();

  const handleModal = (payload) => {
    dispatch(toggleModal(payload));
  }

  const handleLogOut = async () => {
    const response = await postRequest('auth/logout', {});

    if (response.statusCode == 200) {
      console.log('LOGED OUT');
      console.log(response);
      //dispatch(toggleModal('SIGN_IN'));
    } else {
      console.log('ERROR LOGED IN');
      console.log(response);
    }
  }

  return(
    <>
      <header className="h-14 fixed w-4/5 bg-white">
        <div className="flex-wrap h-14 flex justify-end content-center gap-5">
          <div className="container flex-1 mx-auto flex justify-between items-center">
            <nav className="ml-4">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">
                    <span className="text-black font-bold">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-black font-bold">About</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex-1 flex flex-row justify-end">
          { isLoggedIn ? (<>
            <div className="rounded cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" onClick={() => handleLogOut()}>
              LogOut
            </div>
          </>) : (<>
          <Link href={'/signin'}>
            <div className="rounded  cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4">
              Signin
            </div>
          </Link>
          <Link href={'/signup'}>
            <div className="rounded cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" onClick={() => handleModal('SIGN_UP')}>
              Signup
            </div></Link></>)}
          
          </div>
        </div>
      </header>
    </>
  )
}