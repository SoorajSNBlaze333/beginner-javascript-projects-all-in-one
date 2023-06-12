import { ArrowCircleRight } from "@phosphor-icons/react";
import { useRef } from "react";

export default function ColorChanger({ onUpdate }) {
  const inputRef = useRef(null);

  return (<section className="col-span-1 row-span-1 bg-white border-2 border-slate-100 rounded-md p-2 flex flex-col justify-between">
    <span className="text-xl font-semibold">Background Color Changer</span>
    <p className="text-sm text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    <section className="relative flex items-center">
      <input
        id="color-changer"
        type="text"
        placeholder="Enter the name or hex code of the color"
        ref={inputRef}
        className="outline-none text-sm bg-slate-50 py-1 px-2 rounded-md border-2 border-slate-100 relative w-full"
      />
      <ArrowCircleRight
        onClick={() => onUpdate(inputRef.current.value)}
        className="absolute right-1 cursor-pointer"
        size={20}
      />
    </section>
  </section>)
}