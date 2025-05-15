import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const cats = [
    {
      name: "Comedy",
      color: "bg-gray-300",
      to: "/categories/Comedy",
      img: "comedy.webp"
    },
    {
      name: "Business",
      color: "bg-pink-500",
      to: "/categories/Business",
      img: "business.jpg"
    },
    {
      name: "Education",
      color: "bg-orange-300",
      to: "/categories/Education",
      img: "education.jpg"
    },
    {
      name: "Hobbies",
      color: "bg-blue-300",
      to: "/categories/Hobbies",
      img: "hobby.jpg"
    },
    {
      name: "Government",
      color: "bg-yellow-300",
      to: "/categories/Government", 
      img: "goverment.jpg"
    }
  ];

  return (
    <div className="h-screen lg:h-[70vh]">
      <div className="px-4 lg:px-12 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cats.map((items) => (
          <Link
            to={items.to}
            key={items.name}
            className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden`}
          >
            <div className="text-center">{items.name}</div>
            <div className="w-full flex items-center justify-end absolute -bottom-2 -right-2">
              <img
                src={items.img}
                alt={`${items.name} category`}
                className="rounded mr-2 mb-2 rotate-[6deg] h-[18vh] sm:h-[20vh] md:h-[18vh] lg:h-[15vh] w-auto object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
