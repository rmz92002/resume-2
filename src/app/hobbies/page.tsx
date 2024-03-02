"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import fut from '@/images/fut.png'
import DJ from '@/images/Dj.png'


export default function TracingBeamDemo() {
  return (
    <div style={{background:'black'}}>
        <Navbar/>
    <TracingBeam className="px-6 ">
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Hobbies
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
    
    </TracingBeam>
    </div>
  );
}

const content = [
  {
    title: "Soccer",
    description:
      "Been playing soccer since I was three years old and immediately fell in love with it. The moment I kicked a ball for the first time, I felt an indescribable connection to the game. It was as if all the world's complexities faded away, leaving just me and the ball in perfect harmony.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={fut}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "DJ",
    description:
      "I DJ in the weekends for fun, a hobby that quickly turned into a passionate pursuit of music and rhythm. Over time, I've had the privilege of crafting remixes that have garnered thousands of views online, a testament to the universal language of music and its power to connect us. Among these creations, I've ventured into the vibrant world of reggaeton, blending its infectious beats with my own style to create something uniquely energizing and dance-worthy. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={DJ}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Triathlon",
    description:
      "After years of channeling my energy and passion into soccer, the unexpected turn of not making it into the UC Berkeley soccer club led me to seek a new outlet for my athletic ambitions. That's when I discovered triathlon—a demanding yet exhilarating sport that combines swimming, cycling, and running in one continuous and sequential race.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       Triathlon
      </div>
    ),
  },

];