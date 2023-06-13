"use client";

import { useState } from 'react'
import Calculator from '@/components/Calculator';
import ColorChanger from '@/components/ColorChanger'

export default function Home() {
  const [background, setBackground] = useState('#ffffff');

  return (
    <main className="h-full w-full ease-in duration-200 flex justify-center items-center p-4" style={{ backgroundColor: background }}>
      {/* <ColorChanger onUpdate={(color) => setBackground(color)} /> */}
      <Calculator />
    </main>
  )
}
