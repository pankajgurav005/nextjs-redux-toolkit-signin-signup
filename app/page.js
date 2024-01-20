import React from 'react';
import Image from "next/image";
import Header from '@/components/Header';
import { ModalManager } from './common/Modalmanager';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ModalManager />
    </main>
  );
}
