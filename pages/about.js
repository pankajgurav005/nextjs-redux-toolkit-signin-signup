"use client"
import React, {useState} from "react";
import { closeModal, openModal, toggleModal } from "@/app/redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Header from "@/components/Header";

export default function About() {

  return(
    <>
      <div className="mt-16">Test About Page</div>
    </>
  )
}