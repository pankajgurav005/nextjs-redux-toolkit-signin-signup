"use client"
import React, {useState} from "react";
import { closeModal, openModal, toggleModal } from "@/app/redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function Header() {
  const dispatch = useDispatch();

  const handleModal = (payload) => {
    dispatch(toggleModal(payload));
  }

  return(
    <>
      <header className="h-16 fixed top-0 left-0 w-full bg-slate-800">
        <div className="w-full flex-wrap h-16 flex justify-end content-center gap-5">
          <div className="container flex-1 mx-auto flex justify-between items-center">
            <Link href="/" className="ml-5">
              <span className="text-xl font-bold text-white">DEMO APP</span>
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">
                    <span className="text-white">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-white">About</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-1 flex flex-row justify-end">
            <div className="rounded  cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" onClick={() => handleModal('SIGN_IN')}>
              Signin
            </div>
            <div className="rounded cursor-pointer uppercase h-8 text-sm bg-slate-400 w-24 text-white font-semibold flex flex-wrap justify-center content-center mr-4" onClick={() => handleModal('SIGN_UP')}>
              Signup
            </div>
          </div>
        </div>
      </header>
    </>
  )
}