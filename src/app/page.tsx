"use client";

import Counter from "@/components/counters";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between my-40">
      <Counter />
    </div>
  );
}
