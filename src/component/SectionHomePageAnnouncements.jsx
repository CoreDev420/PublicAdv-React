import React from "react";
import { motion } from "framer-motion";
import AnnouncementCard from "./AnnouncementCard";
import ButtonOutline from "../misc/ButtonOutline";
const postItems = [
  {
    imgSrc: "sport-3365503_640.jpg",
    title: "Iphone 64GB 6s Plus",
    content: "Phones",
    place: "London",
    price: "1600",
  },
  {
    imgSrc: "books-1617327_640.jpg",
    title: "Books for rent",
    content: "Books",
    place: "Berlin",
    price: "5000",
  },
  {
    imgSrc: "football-3471371_640.jpg",
    title: "Football New fifa",
    content: "Games",
    place: "Lahore",
    price: "10.0 M",
  },
  {
    imgSrc: "bicycle-1209682_640.jpg",
    title: "Bicyle",
    content: "vehicle",
    place: "New York",
    price: "500.0 k",
  },
  {
    imgSrc: "vegetables-1584999_640.jpg",
    title: "Fresh Food And ....",
    content: "Food",
    place: "Norway",
    price: "150.0 k",
  },
  {
    imgSrc: "bmw-1313343_640.jpg",
    title: "New BMW For...",
    content: "Car",
    place: "Australia",
    price: "10.0 m",
  },
  {
    imgSrc: "job-2860035_640.jpg",
    title: "We are hiring",
    content: "Jobs",
    place: "Pakistan",
    price: "...",
  },
  {
    imgSrc: "home-office-336374_640.jpg",
    title: "Apple Mac 16gb..",
    content: "Laptop",
    place: "Auckland",
    price: "500.0 k",
  },
  {
    imgSrc: "monitor-1276949_640.jpg",
    title: "32in Lcd TV",
    content: "LCD",
    place: "Paris",
    price: "2800",
  },
  {
    imgSrc: "pug-801826_640.jpg",
    title: "Dog for adoption",
    content: "Animal",
    place: "Japan",
    price: "Free",
  },
  {
    imgSrc: "rottweiler-1785760_640.jpg",
    title: "2 Pupies Inocent",
    content: "Dogs",
    place: "Turkey",
    price: "5.0 M",
  },
  {
    imgSrc: "medical-563427_640.jpg",
    title: "Child Care Center",
    content: "Child Care",
    place: "Atlanta",
    price: "50.0 k",
  },
];

const SectionHomePageAnnouncements = () => {
  return (
    <div className="bg-[#F2F2F2] w-full pb-5">
      <div className="container mx-auto max-w-6xl px-8 space-y-8 text-center">
        <h1 className="text-4xl font-bold uppercase text-center py-5">
          Últimos Anuncios
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-4">
          {postItems.map((item, index) => {
            return (
              <AnnouncementCard
                imgSrc={item.imgSrc}
                title={item.title}
                content={item.content}
                place={item.place}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
        <ButtonOutline content="Show All" addClass="font-extrabold"/>
      </div>
    </div>
  );
};

export default SectionHomePageAnnouncements;
