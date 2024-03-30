"use client";

import React from "react";

const Main = () => {
  return (
    <main className=" flex flex-col items-center max-w-screen-lg w-full">
      <h2 className="text-center text-2xl font-medium mb-4">O que você tem pra fazer?</h2>
      <div className="flex w-11/12 gap-1 mb-8">
        <input type="text" className="grow p-2 outline-none border-2 rounded text-sm focus:border-blue-400 transition-colors" />
        <button type="button" className="text-white font-medium bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 transition-colors focus:bg-blue-400 focus:outline-none">Adicionar</button>
      </div>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem, ipsum.</li>
      </ul>
    </main>
  );
};

export default Main;
