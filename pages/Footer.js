import Image from "next/image";
import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="bg-bg2 h-[418px] flex flex-row py-16 px-20">
          <div className="basis-2/5 flex flex-col">
              <h2 className="text-white text-4xl font-semibold font-body">Contact me.</h2>
              <p className="text-white text-sm font-medium font-body pt-8">Mail me here</p>
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
          <div className="basis-3/5 ml-auto rounded-md flex flex-col p-8 bg-gradient-to-r from-[#FFFFFF10] to-transparent">
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
    );
  }
}

export default Footer;