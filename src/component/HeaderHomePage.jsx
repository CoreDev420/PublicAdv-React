import React from "react";
import ButtonOutline from "../misc/ButtonOutline";
const HeaderHomePage = () => {
  return (
    <>
      <div className="hero-homepage pt-[96px]">
        <div className="container mx-auto px-8 text-center space-y-6 max-w-6xl">
          <h1 className="text-white font-sans text-4xl xl:text-6xl 2xl:text-7xl">
            Anuncios y avisos clasificados
          </h1>
          <h2 className="text-white font-sans text-3xl xl:text-4xl 2xl:text-5xl">
            Encuentra todo lo que buscas cerca de ti .
          </h2>

          <form
            className="border rounded-full bg-white py-2 
          grid grid-cols-1 px-16 lg:px-4
          lg:justify-between space-y-8 lg:flex lg:space-y-0 lg:flex-row lg:space-x-5 bg-transparent"
          >
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="grow border border-primary rounded-md px-2 focus:outline-none"
            />
            <select className="form-control grow border border-primary rounded-md px-2 focus:border-primary-400! focus:outline-none">
              <option>Todas las Categorias</option>
              <option>Carros</option>
              <option>Inmuebles</option>
              <option>Trabajos</option>
              <option>Alquiler</option>
              <option>Servicios</option>
            </select>
            <ButtonOutline content="Buscar" addClass="grow" />
          </form>

          <div className="flex justify-center max-w-5xl flex-wrap">
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">locales</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Autos</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Departamentos</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Alquiler</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Empleos</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Venta</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Traspaso</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Terrenos</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Ropa</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Casas</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">abogado</a>
            <a href="/" className="text-[#a46fbf] text-sm hover:text-white p-2">Restaurante</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHomePage;
