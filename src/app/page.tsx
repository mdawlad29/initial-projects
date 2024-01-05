"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(containerRef);

  const handleClickOutside = (event: any) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleButtonClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between my-40">
      {/* <Counter /> */}

      <div
        onClick={handleButtonClick}
        className="bg-cyan-400 h-10 w-72 rounded relative text-black"
      >
        click
      </div>

      {open && (
        <div ref={containerRef} className="shadow-2xl border p-16 w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          cumque quos maiores perspiciatis magnam harum quam, rem voluptatem
          consequuntur illum, rerum quia eius. Natus quo sed corporis ad aliquam
          nisi!
        </div>
      )}
    </div>
  );
}
