import Image from "next/image";
import React, { Component, Fragment, useRef } from "react";
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const ScrollToTop = () => window.scroll({ top: 0, behavior: "smooth" })
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zd6g33i', 'template_zs6vj2v', form.current, 'user_8lKf5G1QL5FpXUvOAFKRy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
      <div className="relative" id="contact">
        <div className="bg-bg2 flex lg:flex-row flex-col py-16 px-5 lg:px-20">
            <div className="lg:basis-2/5 basis-5/5 flex flex-col px-5 lg:px-0 pb-10 lg:pb-0">
                <h2 className="text-white text-4xl font-semibold font-body">Contact me.</h2>
                <p className="text-white text-sm font-medium font-body pt-8">Email me</p>
                <p className="text-white text-lg font-semibold font-body">azizsaefulhidayat@gmail.com</p>
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
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" id="from_name" name="from_name" className="w-full bg-transparent border-b-[1px] border-white mb-4 py-2 text-white text-sm font-medium font-body" placeholder="Your name"></input>
                  <input type="text" id="from_email" name="from_email" className="w-full bg-transparent border-b-[1px] border-white mb-4 py-2 text-white text-sm font-medium font-body" placeholder="Your email"></input>
                  <input type="text" id="message" name="message" className="w-full h-[80px] bg-transparent border-b-[1px] border-white pt-2 pb-auto text-white text-sm font-medium font-body" placeholder="Your project description"></input>
                  <button type="submit" value="Send" className="flex flex-row mt-3 ml-auto rounded-md bg-violet2 px-5 ">
                  <div className="pt-3"><Image src="/submit.svg" alt="submit" width={20} height={20}/></div>
                  <p className="text-center text-white text-base font-semibold font-body pl-2 py-2">Submit</p>
              </button>
              </form>
            </div>

        </div>
        <button className="w-[40px] h-[56px] bg-violet rounded-b-full absolute -top-2 right-8" onClick={ScrollToTop}>
        <Image src="/arrow-up.svg" alt="arrow-up" width={24} height={22}/>
        </button>
      </div>
    );
  }


export default Footer;