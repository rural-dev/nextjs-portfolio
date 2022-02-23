import Image from "next/image";
import React, { Component, Fragment } from "react";

const Footer = () => {
    const ScrollToTop = () => window.scroll({ top: 0, behavior: "smooth" })

    return (
      <div className="relative" id="contact">
        <div className="bg-bg2 flex lg:flex-row flex-col py-16 px-5 lg:px-20">
            <div className="lg:basis-2/5 basis-5/5 flex flex-col px-5 lg:px-0 pb-10 lg:pb-0">
                <h2 className="text-white text-4xl font-semibold font-body">Contact me.</h2>
                <p className="text-white text-sm font-medium font-body pt-8">Hire me</p>
                <a href="https://www.upwork.com/freelancers/~018467d55c4bde0a45" target='_blank' rel="noreferrer"><p className="text-white text-lg font-semibold font-body">Hire me in Upwork</p></a>
                <p className="text-white text-sm font-medium font-body pt-8">Follow me</p>
                <div className="flex flex-row pt-4">
                  <div className="pr-6"><Image src="/fb.svg" alt="Facebook" width={24} height={24}/></div>
                  <div className="pr-6"><Image src="/ig.svg" alt="Instagram" width={24} height={24}/></div>
                  <div className="pr-6"><Image src="/linkedin.svg" alt="Linkedin" width={24} height={24}/></div>
                  <div className="pr-6"><Image src="/twitter.svg" alt="Twitter" width={24} height={24}/></div>
                  <div className="pr-6"><Image src="/github.svg" alt="Github" width={24} height={24}/></div>
                </div>
                <p className="text-white text-xs font-medium font-body pt-8">Copyright © 2022, All right reserved</p>
            </div>
            <div className="lg:basis-3/5 basis-5/5 ml-auto rounded-md flex flex-col p-8 bg-gradient-to-r from-[#FFFFFF10] to-transparent">
              <form>
                  <input type="text" id="name" name="name" className="w-full bg-transparent border-b-[1px] border-white mb-4 py-2 text-white text-sm font-medium font-body" value="Your name"></input>
                  <input type="text" id="email" name="email" className="w-full bg-transparent border-b-[1px] border-white mb-4 py-2 text-white text-sm font-medium font-body" value="Your email address"></input>
                  <input type="text" id="desc" name="desc" className="w-full h-[80px] bg-transparent border-b-[1px] border-white pt-2 pb-auto text-white text-sm font-medium font-body" value="Your project description"></input>
              </form>
              <button className="flex flex-row mt-3 ml-auto rounded-md bg-violet2 px-5 ">
                  <div className="pt-3"><Image src="/submit.svg" alt="submit" width={20} height={20}/></div>
                  <p className="text-center text-white text-base font-semibold font-body pl-2 py-2">Submit</p>
              </button>

            </div>

        </div>
        <button className="w-[40px] h-[56px] bg-violet rounded-b-full absolute -top-2 right-8" onClick={ScrollToTop}>
        <Image src="/arrow-up.svg" alt="arrow-up" width={24} height={22}/>
        </button>
      </div>
    );
  }


export default Footer;