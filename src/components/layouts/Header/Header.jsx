import { useState } from "react";

export const Header = () => {

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-15 bg-gradient-to-r bg-yellow-500 to-yellow-200 shadow-lg py-4 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 list-none">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Consumo de Api's</h1>
        </div>

       
      </header>

      {/* Para que el contenido no quede tapado */}
      <div className="pt-20"></div>
    </>
  );
};
