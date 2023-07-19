import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
const categoriasItems = [
  "icofont-laptop-alt",
  "icofont-briefcase",
  "icofont-baby-cloth",
  "icofont-car-alt-1",
  "icofont-calculator-alt-2",
  "icofont-zebra",
  "icofont-home",
  "icofont-paint",
  "icofont-fast-food",
  "icofont-diners-club",
  "icofont-fast-delivery",
  "icofont-computer",
  "icofont-coffee-mug",
  "icofont-medical-sign",
  "icofont-film",
  "icofont-soccer",
  "icofont-iphone",
  "icofont-live-support",
  "icofont-book-alt",
  "icofont-children-care",
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
                  <i className={`text-4xl mx-auto ${items}`}></i>
                  <span className="mx-auto">Laptops</span>
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
