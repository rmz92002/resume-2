"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import imageResume from '../images/resume-photo.png'
import Navbar from "../components/navbar";
import { TracingBeam } from "../components/ui/tracing-beam";
// import { calsans } from "@/fonts/calsans";
// import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import { motion } from "framer-motion";


export default function page() {
  const tabs = [
    {
      title: "Code",
      value: "code",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900" style={{maxWidth:'100%', overflow:'hidden'}}>
          <p>Code</p>
          <p style={{fontSize: 18, fontWeight:"300"}}>
          Over the course of my development journey, I have acquired a comprehensive skill set that includes Python, JavaScript, HTML, CSS, React, React Native, MongoDB, and Node.js. Leveraging these diverse technologies, I have successfully designed and implemented a variety of projects. These endeavors not only allowed me to apply my theoretical knowledge in practical scenarios but also helped me to refine my problem-solving skills, deepen my understanding of software development principles, and enhance my ability to create robust, scalable applications. Each project served as a stepping stone, enabling me to explore new challenges and continuously expand my technical expertise.
          </p>
         <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', marginTop: 50}}>
         <Link href={"/work"}>
         <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{display:'flex', alignItems:'center', justifyContent:'center', borderStyle:'solid', borderColor:'white', color:'white', fontSize: 20, borderWidth: 2, borderRadius: 10, fontWeight:'300', width: 200, textAlign:'center'}}>
        <p>{`View Projects ->`}</p>
        </motion.div>
        </Link>
          </div> 
        </div>
      ),
    },
    {
      title: "Film",
      value: "film",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Film</p>
          <p style={{fontSize: 18, fontWeight:"300"}}>
            {"In the realm of filmmaking, my creative journey has been marked by the proficient use of Final Cut Pro, through which I've crafted compelling narratives and visually striking content. One of my most notable projects is a documentary that delves into the lives of Venezuelan immigrants in Colombia, offering a poignant look at their struggles and resilience in the face of adversity. This work not only showcases my ability to convey powerful stories through film but also highlights my commitment to shedding light on significant social issues. Additionally, I manage a YouTube channel where I regularly upload content that spans a variety of topics, including finance, providing valuable insights and engaging discussions to a diverse audience. This platform has become a conduit for my creativity, allowing me to explore different subjects and connect with viewers on multiple levels."}
          </p>
         <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', marginTop: 50}}>
          <Link href={"/film"}>
          <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{display:'flex', alignItems:'center', justifyContent:'center', borderStyle:'solid', borderColor:'white', color:'white', fontSize: 20, borderWidth: 2, borderRadius: 10, fontWeight:'300', width: 200, textAlign:'center'}}>
        <p>{`View Films ->`}</p>
        </motion.div>
          </Link>
          </div> 
        </div>
      ),
    },
    {
      title: "Other Hobbies",
      value: "other-hobbies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Other Hobbies</p>
          <p style={{fontSize: 18, fontWeight:"300"}}>
          In the rare moments of leisure I find amidst my bustling schedule, I immerse myself in activities that not only fuel my passions but also contribute to my personal growth. Soccer, a sport close to my heart, offers me an exhilarating escape and a way to stay physically active, fostering both teamwork and individual skills on the field. As a DJ, I explore the vast landscapes of music, curating soundscapes that resonate with diverse audiences and reflect my artistic expression. This creative outlet not only sharpens my auditory sensibilities but also connects me with the vibrant energy of live performances. Moreover, my commitment to continuous learning sees me dedicating time to further studies, constantly expanding my knowledge base and staying abreast of new developments in my fields of interest. Each of these pursuits—soccer, DJing, and studying—represents a facet of my multifaceted life, contributing to a rich tapestry of experiences that shape who I am.          </p>
         <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', marginTop: 50}}>
         <Link href={"/hobbies"}>
         <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{display:'flex', alignItems:'center', justifyContent:'center', borderStyle:'solid', borderColor:'white', color:'white', fontSize: 20, borderWidth: 2, borderRadius: 10, fontWeight:'300', width: 200, textAlign:'center'}}>
        <p>{`View Hobbies ->`}</p>
        </motion.div>
        </Link>
          </div> 
        </div>
      ),
    },
  ];
  return (
    <div style={{background: 'black'}}>
      <Navbar/>
    <TracingBeam className=" bg-black">
    <WavyBackground className="max-w-4xl  mx-auto pb-40 ">
    
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'space-evenly', alignItems:'center', width:'100wh'}}>
      <img src="https://media.licdn.com/dms/image/D5603AQEwAbObEPquGw/profile-displayphoto-shrink_400_400/0/1709151058725?e=1714608000&v=beta&t=lWr8SFxXHZqsRCjyT2slBEZ08E1wvaeJdN0-JwWkvRw" className="rounded-full w-30 h-30 md:w-30 md:h-30 lg:w-30 lg:h-30"/>
      <div>
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center" style={{marginTop: 30}}>
        Santiago Ramirez
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Machine Learning Engineer, Fullstack Developer, Designer, UC Berkeley Student, and Soccer Player
      </p>
      </div>
      {/* <a href={Profile} target="_blank" rel="noopener noreferrer" style={{marginTop: 20}}>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" style={{marginTop: 20}}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" style={{fontSize: 20}}>
          Resume
        </span>
      </button>
      </a> */}
      </div>
      </WavyBackground>
      <p  style={{color:'white', fontSize: 100, textAlign:'center'}}>What I do?</p>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 bg-black">
      <Tabs tabs={tabs} />
      </div>
    </TracingBeam>
    <div style={{height: 100, width:'100%', background:'black'}}/>
    </div>
    
  );
}

const DummyContent = () => {
  return (
    <img
      src=""
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
// const dummyContent = [
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p style={{color:'white'}}>
//         Over the course of my development journey, I have acquired a comprehensive skill set that includes Python, JavaScript, HTML, CSS, React, React Native, MongoDB, and Node.js. Leveraging these diverse technologies, I have successfully designed and implemented a variety of projects. These endeavors not only allowed me to apply my theoretical knowledge in practical scenarios but also helped me to refine my problem-solving skills, deepen my understanding of software development principles, and enhance my ability to create robust, scalable applications. Each project served as a stepping stone, enabling me to explore new challenges and continuously expand my technical expertise.
//         </p>
        
//       </>
//     ),
//     badge: "Coding",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//         <p>
//           In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
//           veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
//           reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
//           cillum ut mollit.
//         </p>
//       </>
//     ),
//     badge: "Changelog",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];