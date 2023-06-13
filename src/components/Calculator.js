import { useRef, useState } from "react"

export default function Calculator() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    const value = +inputRef.current.value || 0;
    if (operation === "+") setResult(prev => prev += value);
    else if (operation === "-") setResult(prev => prev -= value);
    else if (operation === "*") setResult(prev => prev *= value);
    else if (operation === "/") setResult(prev => prev /= value);
    inputRef.current.value = "";
  }

  const handleNumber = (num) => {
    if (inputRef.current.value === "0") inputRef.current.value = num;
    else inputRef.current.value += num;
  }

  const handleClear = () => {
    setResult(0);
    inputRef.current.value = 0;
  }

  return (<section className="h-[450px] w-[300px] bg-white border-2 border-slate-100 rounded-md p-4 flex flex-col justify-between">
    <section className="flex justify-start gap-2 px-1 items-center border-2 rounded-md relative">
      <input ref={inputRef} className="text-2xl outline-none text-sm py-1 px-2 rounded-md w-full text-right" />
    </section>
    <section className="grid grid-cols-4 grid-rows-4 gap-4">
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleClear()}>C</button>
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleClear()}>C</button>
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleOperation("/")}>/</button>
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleOperation("*")}>x</button>

      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleNumber("7")}>7</button>
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleNumber("8")}>8</button>
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleNumber("9")}>9</button>
      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleOperation("-")}>-</button>

      <button className="border-2 p-2 rounded-md flex justify-center items-center" onClick={() => handleOperation("+")}>+</button>
    </section>
  </section>)
}