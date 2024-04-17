import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-slate-300 w-full px-24 py-4">
      <span className="font-bold text-xl text-slate-700">Afazeres</span>
      <ul className="flex justify-between gap-6">
        <Link href="/" className="cursor-pointer transition-colors hover:text-slate-500">
          início
        </Link>
        <Link href="/about" className="cursor-pointer transition-colors hover:text-slate-500">
          sobre
        </Link>
      </ul>
    </header>
  );
};

export default Header;
