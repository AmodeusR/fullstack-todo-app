import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-slate-300 w-full px-24 py-4">
      <span className="font-bold text-xl text-slate-700">Afazeres</span>
      <ul className="flex justify-between gap-6">
        <li className="cursor-pointer transition-colors hover:text-slate-500">
          início
        </li>
        <li className="cursor-pointer transition-colors hover:text-slate-500">
          sobre
        </li>
      </ul>
    </header>
  );
};

export default Header;
