import React from "react";
import { motion } from "framer-motion";

const AnnouncementCard = (props) => {
  const { imgSrc, title, content, place, price } = props;
  return (
    <>
      <div className="max-w-lg border-4 rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-orange-700 flex flex-col justify-between">
        <motion.img
          src={`img/${imgSrc}`}
          alt="noImg"
          className="h-full"
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.1,
            },
          }}
        />
        <div className="bg-white space-y-4 pt-3">
          <h1 className="text-[#616161] text-lg text-center">{title}</h1>
          <div className="flex justify-between items-baseline pl-3">
            <div className="flex">
              <i class="icofont-phone my-auto"></i>
              <span className="uppercase text-[#616161] text-sm">{content}</span>
            </div>
            <div className="flex">
              <i class="icofont-location-arrow my-auto"></i>
              <span className="uppercase text-[#616161] text-sm">{place}</span>
            </div>
            <div className="flex pr-3">
              <i class="icofont-dollar my-auto"></i>
              <span className="uppercase text-[#616161] text-sm">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementCard;
