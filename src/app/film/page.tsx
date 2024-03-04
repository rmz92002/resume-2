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

import { LampContainer } from "@/components/ui/lamp"

export default function TracingBeamDemo() {
  return (
    <div style={{background:'black'}}>
        <Navbar/>
    <TracingBeam className="px-6 ">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Film
      </motion.h1>
    </LampContainer>
    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} style={{marginTop: 20}} className="mb-10">
            {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
  */}
            <p className="text-xl mb-4" style={{color:'white'}}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <iframe width="700" height="405" src={item.image} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    
    </TracingBeam>
    <div style={{height: 100, width:'100%', background:'black'}}/>
    </div>
  );
}

const dummyContent = [
    {
      title: "Travel",
      description: (
        <>
          <p style={{color:'white', marginTop: 20}}>
        I usually do travel videos whenever I visit some country, and I thoroughly enjoy the process of editing. For me, editing is not just about piecing clips together; it's an art form that allows me to showcase my creative side. It's in these moments, when I'm sifting through hours of footage, that I find the true essence of my travels. I get to relive the experiences, the laughter, and the awe-inspiring landscapes, all while crafting a narrative that's uniquely mine. The editing process also challenges me to think differently about storytelling, encouraging me to experiment with various techniques, transitions, and music to convey emotions and stories in the most engaging way possible. It's this creative freedom and the ability to share my adventures in a personal and impactful manner that I believe makes editing the best part of my travel experiences. Each video becomes a keepsake, a reflection of not just the places I've been to but also of my growth as a creator and an individual.
        </p>

        </>
      ),
      badge: "",
      image:
        "https://www.youtube.com/embed/nral5jSVChU",
    },
    {
      title: "Documentary",
      description: (
        <>
          <p style={{color:'white', marginTop: 20}}>
          When I lived in Colombia, the sight of Venezuelan people in the streets, struggling to find stability and safety in a foreign land, deeply moved me. Their stories of resilience in the face of hardship and their unwavering hope for a better future resonated with me, compelling me to take action. I recognized the power of storytelling as a tool to bridge understanding and foster empathy among communities. Motivated by this realization, I embarked on a journey to create a mini-documentary that would not only highlight the challenges faced by the Venezuelan migrants but also humanize their experiences for the Colombian people. The process involved immersing myself in their world, listening to their stories, and capturing their daily lives through my lens. I learned about their dreams, their struggles to find work, and the families they had left behind in hopes of securing a brighter future. My documentary aimed to shed light on these aspects, providing a platform for their voices to be heard and understood. I also included sections that offered practical ways the local community could assist, from donating clothes and food to volunteering at shelters and participating in integration programs. The goal was to inspire action and create a sense of solidarity and support between the Colombian people and their Venezuelan neighbors. Upon its completion, I shared the documentary on various platforms and organized screenings in local communities. The response was overwhelmingly positive, with many expressing a newfound understanding and compassion towards the Venezuelan migrants. It was a humbling experience to see my work catalyze such a meaningful impact, fostering a stronger, more inclusive community where empathy and support flourished. This project not only allowed me to contribute to a cause close to my heart but also reaffirmed the transformative power of storytelling in creating social change.          </p>
        </>
      ),
      badge: "",
      image: "https://www.youtube.com/embed/sdAYUKGCgMw"
    },
    {
      title: "Marketing",
      description: (
        <>
          <p style={{color:"white", margin: 10}}>
          When quarantine struck in high school, I found solace in dropshipping, intrigued by its inventory-free model. Diligently, I researched, picked a niche, and set up my online store. Realizing the potential in marketing, I decided to craft my own commercials to boost sales.
          </p>
        </>
      ),
      badge: "",
      image:"https://www.youtube.com/embed/vo4bXBc6yg8"    },
  ];