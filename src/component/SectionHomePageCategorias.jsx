import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
const categoriasItems = [
  {
    icon: "icofont-laptop-alt",
    title: "Laptops",
  },
  {
    icon: "icofont-briefcase",
    title: "Emploes",
  },
  {
    icon: "icofont-baby-cloth",
    title: "Ropa",
  },
  {
    icon: "icofont-car-alt-1",
    title: "Carros",
  },

  {
    icon: "icofont-calculator-alt-2",
    title: "Auditors",
  },
  {
    icon: "icofont-zebra",
    title: "mascotas",
  },
  {
    icon: "icofont-home",
    title: "Finance",
  },
  {
    icon: "icofont-paint",
    title: "Art",
  },
  {
    icon: "icofont-fast-food",
    title: "Comida",
  },
  {
    icon: "icofont-diners-club",
    title: "Club",
  },

  {
    icon: "icofont-fast-delivery",
    title: "Logistics",
  },
  {
    icon: "icofont-computer",
    title: "Electronicos",
  },
  {
    icon: "icofont-coffee-mug",
    title: "Cafe",
  },
  {
    icon: "icofont-medical-sign",
    title: "Doctores",
  },
  {
    icon: "icofont-film",
    title: "Entretenimiento",
  },
  {
    icon: "icofont-soccer",
    title: "Juegos",
  },
  {
    icon: "icofont-iphone",
    title: "Celulares",
  },
  {
    icon: "icofont-live-support",
    title: "Support",
  },
  {
    icon: "icofont-book-alt",
    title: "Libros",
  },
  {
    icon: "icofont-children-care",
    title: "Para ninos",
  },
];
const SectionHomePageCategorias = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="container mx-auto px-8 space-y-6 max-w-6xl">
        <div className="px-4 space-x-5 space-y-8">
          <h2 className="text-3xl text-green-500 font-sans font-medium text-center">
            <a href="/" lang="no" className="text-decoration-none">
              CATEGORIAS
            </a>
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-y-5">
            {categoriasItems.map((items, index) => {
              console.log(index);
              return (
                <motion.a
                  key={index}
                  href="/"
                  className={
                    "flex flex-col px-1 rounded-sm text-[#A46FBF] mx-auto p-0 w-[100px] hover:text-green-400" +
                    (index === 16
                      ? " lg:col-start-3 sm:col-start-5 xl:col-start-7"
                      : "") +
                    (index === 18
                      ? " sm:col-start-3 lg:col-start-5 xl:col-start-9"
                      : "")
                  }
                  variants={scrollAnimation}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 600, damping: 10 }}
                >
                  <i className={`text-4xl mx-auto ${items.icon}`}></i>
                  <span className="mx-auto">{items.title}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHomePageCategorias;
