import React from "react";
import FooterNewletterSection from "./FooterNewsletterSection";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer class="bg-neutral-900 text-center text-white pt-5">
      <div class="container mx-auto px-8 space-y-6 max-w-6xl">
        <FooterNewletterSection />
      </div>
      <div className="bg-[#3C3241] pt-5">
        <div class="container mx-auto px-8 space-y-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8">
            <div className="space-y-2 my-auto">
              <img
                src="img/logo_200x200.png"
                className="max-w-[100px] mx-auto"
                alt="logo"
              />
              <div className="flex">
                {" "}
                <i class="icofont-phone my-auto"></i>
                <p>123-456-987</p>
              </div>
              <div className="flex">
                {" "}
                <i class="icofont-location-pin my-auto"></i>
                <p>LATAM, Perú, Cusco</p>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl text-white font-medium mb-4">
                Popular Categories
              </h1>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Properties
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Jobs
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Phones
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Cars
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Rents
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Electronics
              </a>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-white font-medium mb-4">Location</h1>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                London
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Barcelona
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                New York
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                France
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Lahore
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Mumbai
              </a>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl text-white font-medium mb-4">
                LImportant Links
              </h1>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Home
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                About
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Contact US
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Login
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Blog
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Faqs
              </a>
            </div>
          </div>
          <div className="text-center lg:text-left lg:flex lg:justify-between">
            <div className="flex justify-center lg:justify-start">
              {" "}
              <p>
                2023 Made with love <strong>"PublicAdis"</strong> Powered by
                <i class="icofont-heart-alt p-2"></i>
              </p>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <a href="/" className="text-green-500 font-sans hover:font-semibold">
                  DriverEdu
                </a>
              </motion.div>
            </div>
            <div className="flex space-x-5 flex-wrap justify-center lg:justify-start">
            <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Terms & Condition
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Dashboard
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-[#a2a2a2] hover:text-white text-lg block"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
