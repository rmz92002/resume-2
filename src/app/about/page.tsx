"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/navbar";
import family from '@/images/family.jpeg'
 
export default function TracingBeamDemo() {
  return (
    <div style={{background:'black'}}>
        <Navbar/>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative bg-black">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={"text-xl mb-4"} style={{color:'white'}}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={family}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    <div style={{height: 50, width:'100%', background:'black'}}/>
    </div>
  );
}
 
const dummyContent = [
  {
    title: "Who I am",
    description: (
   
        <p style={{color:'white', fontSize: 20, lineHeight: 1.5}}>
        I was born in Monterrey, Mexico, but moved to the Philippines when I was a year old, living there for three years. After that, I moved to a new country every three years, resulting in my having lived in eight different countries: Mexico, the Philippines, Thailand, Costa Rica, Puerto Rico, the Dominican Republic, Colombia, and the United States. As you might infer, my life has been quite hectic. However, amidst all the chaos, I have made numerous friends from various parts of the world and have had the opportunity to learn about new cultures.
        </p>
    ),
    badge: "",
    image: family,
  },
//   {
//     title: "Who I am",
//     description: (
//       <>
//         <p style={{color:'white'}}>
//         I was born in Monterrey, Mexico, but moved to the Philippines when I was a year old, living there for three years. After that, I moved to a new country every three years, resulting in my having lived in eight different countries: Mexico, the Philippines, Thailand, Costa Rica, Puerto Rico, the Dominican Republic, Colombia, and the United States. As you might infer, my life has been quite hectic. However, amidst all the chaos, I have made numerous friends from various parts of the world and have had the opportunity to learn about new cultures.
//         </p>
//       </>
//     ),
//     badge: "",
//     image: family,
//   },
];