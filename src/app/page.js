"use client";

import ColorChanger from '@/components/ColorChanger'
import { useState } from 'react'

export default function Home() {
  const [background, setBackground] = useState('#ffffff');

  return (
    <main className="h-full w-full ease-in duration-200 grid grid-cols-2 grid-rows-5 gap-4 p-4" style={{ backgroundColor: background }}>
      <ColorChanger onUpdate={(color) => setBackground(color)} />
    </main>
  )
}
