"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";



export default function TracingBeamDemo() {
  return (
    <div style={{background:'black'}}>
        <Navbar/>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        
      <CardItem
  translateZ="50"
  className="text-xl font-bold text-neutral-600 dark:text-white"
>
  Contact Information
</CardItem>
<CardItem
  as="p"
  translateZ="60"
  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
>
  {"Feel free to reach out to me through any of the following channels. I'm always open to discussing new opportunities, projects, or just connecting with like-minded individuals."}
</CardItem>
<div className="flex flex-col items-start mt-4">
<CardItem as="div" translateZ="60" className="flex flex-col gap-4 mt-2">
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-filled" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor" />
  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor" />
</svg>
<p style={{marginLeft: 10}} className="text-neutral-500 text-sm dark:text-neutral-300">
School email: <a href="mailto:santiago.ramirez@berkeley.edu">santiago.ramirez@berkeley.edu</a>
</p>
  </div>
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-filled" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor" />
  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor" />
</svg>
<p style={{marginLeft: 10}} className="text-neutral-500 text-sm dark:text-neutral-300">
Personal email: <a href="mailto:rmz92002@gmail.com">rmz92002@gmail.com</a>
</p>
   
  </div>
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M8 11l0 5" />
  <path d="M8 8l0 .01" />
  <path d="M12 16l0 -5" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
    <a href="https://www.linkedin.com/in/santiago-ramirez-villalobos-68802424a" className="text-neutral-500 text-sm dark:text-neutral-300" style={{marginLeft: 10}}>LinkedIn Profile</a>
  </div>
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg>
    <a href="https://www.instagram.com/jovenrami/?hl=es" className="text-neutral-500 text-sm dark:text-neutral-300" style={{marginLeft: 10}}>Instagram Profile</a>
  </div>
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg>
    <a href="https://www.facebook.com/santiago.ramirez.31337" className="text-neutral-500 text-sm dark:text-neutral-300" style={{marginLeft: 10}}>Facebook Profile</a>
  </div>
  <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 7a2 2 0 0 1 2 2" />
  <path d="M15 3a6 6 0 0 1 6 6" />
</svg>
    <span className="text-neutral-500 text-sm dark:text-neutral-300" style={{marginLeft: 10}}>+1 (445) 208-9637</span>
  </div>
</CardItem>
</div>

      </CardBody>
    </CardContainer>
    </div>
  );
}
 