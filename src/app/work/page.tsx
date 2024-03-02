"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import geek from '@/images/geek.png'
import gala from '@/images/gala.png'
import lion from '@/images/lion.png'
import intelligo from '@/images/intelligo.png'
import doodle from '@/images/doodle.png'
import stock from '@/images/stock.png'
import { motion } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";
import { IconBadge } from "@tabler/icons-react";
import desk from '@/images/desk.png'

export default function TracingBeamDemo() {
  return (
    <div style={{background:'black'}}>
        <Navbar/>
    <TracingBeam className="px-6 ">
    <div className="overflow-hidden dark:bg-[#0B0B0F] w-full">
      <MacbookScroll
      badge={(<IconBadge color="white" className="text-white" />)}
        title={
          <span style={{color:'white', fontSize: 40}}>
            Coding Portfolio
          </span>
        }
        
        src={desk}
        showGradient={true}
      />
    </div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        AIMG
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            Co-founded a cutting-edge technology startup with my brother that utilizes artificial intelligence to generate high-quality images and prints them on demand for customers. Our mission is to revolutionize the way people consume and interact with art, making it more accessible, personalized, and affordable for everyone.
    </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={lion}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
<Link  href="https://aimg.art/" >
<CardItem
    translateZ={20}
    as="a"
    className="px-4 py-2 rounded-xl text-m font-normal dark:text-white bg-black dark:bg-white dark:text-black text-white"
  >
    View Website
  </CardItem>
</Link>
 
</div>
      </CardBody>
      
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
            Free Geek Toronto Project
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
I developed a website for the nonprofit Free Geek Toronto, specializing in selling used electronics. This website employs web scraping to gather internet pricing data for products and employs AI to estimate their approximate values. It's a valuable tool for Free Geek Toronto, aiding in pricing decisions while promoting sustainability in the electronics market.        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={geek}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
        <Link  href="https://priceanything.netlify.app/" >
  <CardItem
    translateZ={20}
    as="a" 
    className="px-4 py-2 rounded-xl text-m font-normal dark:text-white bg-black dark:bg-white dark:text-black text-white"
  >
    View Website
  </CardItem>
  </Link>
</div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Gala
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            Right now I am currently creating my own mobile appllication called Gala. For this to happen I learned React, React Native, NodeJS, and MongoDB.
    </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={gala}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Intelligo
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            Intelligo is an innovative website that employs advanced artificial intelligence (AI) algorithms to simplify the understanding of complex information contained within photos or documents. With the goal of making information more accessible, Intelligo utilizes cutting-edge technology to generate concise summaries of the content it analyzes.
    </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={intelligo}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
        <Link  href="https://intelligoai.netlify.app" >
  <CardItem
    translateZ={20}
    as="a" 
    className="px-4 py-2 rounded-xl text-m font-normal dark:text-white bg-black dark:bg-white dark:text-black text-white"
  >
    View Website
  </CardItem>
  </Link>
</div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Doodle Jump re-creation
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            This is my re-creation of Doodle jump, a project for my CS61a course on Structure and Interpretation of Computer Programs. The project was challenging as I needed to apply physics into coding but it in the end, it's a project that I am most proud of!
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={doodle}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Stock Simulator
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            Created my own stock simulator with pure javascript, html and css. In high school, I took an online course that Harvard offers called CS50 and this was my final project
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={stock}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-10">
    <Link href="https://github.com/rmz92002/Stock_simulator">
  <CardItem
    translateZ={20}
    as="a" 
    className="px-4 py-2 rounded-xl text-m font-normal dark:text-white bg-black dark:bg-white dark:text-black text-white"
  >
    View Code
  </CardItem>
  </Link>
</div>
      </CardBody>
    </CardContainer>
    </TracingBeam>
    </div>
  );
}
 
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];