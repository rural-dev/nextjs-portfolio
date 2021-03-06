import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aziz Saeful Hidayat</title>
        <meta name="description" content="Senior Django, React, React Native Developer" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header/>
      <div className='px-5 lg:px-20'>
        <div className='flex flex-col lg:flex-row'>
          <div className='basis-3/5 px-16'>
          <p className='pt-20 text-4xl text-basic font-semibold font-body'>Hello, I’m Aziz.</p>
          <p className='pt-4 text-sm leading-loose text-basic font-semibold font-body'>I am a Freelancer Full-stack Web and Mobile Developer using the power of Django, React, and React Native.</p>
          <Link href="/projects">
            <button className="flex flex-row mt-16 justify-center items-center rounded-md bg-violet2 text-center text-white text-base font-semibold font-body px-5 py-2">
            <div className="pt-3"><Image src="/submit.svg" alt="submit" width={20} height={20}/></div>
            <p className="text-center text-white text-base font-semibold font-body pl-2 py-2">See Projects</p>
            </button> 
          </Link>
        </div>
        <div className='basis-2/5 my-auto py-10 lg:py-0'>
        <Image src="/ilustration-1.svg" alt="ilustration-1" width={285} height={176}/>

        </div>
      </div>
      <div className='py-8 flex flex-row items-center'>
        <button className='basis-1/3 rounded-full h-1 bg-gradient-to-r from-transparent to-[#4F405850]'/>
        <p className='basis-1/3 text-center text-4xl text-basic font-semibold font-body'>What i do?</p>
        <button className='basis-1/3 rounded-full h-1 bg-gradient-to-r from-[#4F405850] to-transparent'/>
      </div>

      <div className='py-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8'>
        
        <div className='basis-1/2 flex flex-col lg:flex-row items-center space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div className='items-center pb-10 lg:pb-0'><Image src="/web.svg" alt="website" width={60} height={60}/></div>
          <div className='flex flex-col'>
            <p className='text-2xl text-basic font-semibold font-body'>Website</p>
            <p className='pt-2 text-xs text-basic font-semibold font-body'>SaaS, E-Commerce, Financial, Company Profile, etc</p>
          </div>

        </div>
        <div className='basis-1/2 flex flex-col lg:flex-row items-center space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div className='items-center pb-10 lg:pb-0'><Image src="/mobile.svg" alt="mobile" width={60} height={60}/></div>
          <div className='flex flex-col'>
            <p className='text-2xl text-basic font-semibold font-body'>Mobile</p>
            <p className='pt-2 text-xs text-basic font-semibold font-body'>SaaS, E-Commerce, Financial, Company Profile, etc</p>
          </div>

        </div>
      </div>



      </div>
      <div className='bg-basic flex flex-col lg:flex-row space-x-8'>
        <div className='basis-1/2 px-20 py-16'>
        <h2 className="text-white text-4xl font-semibold font-body">About me.</h2>
        <p className="text-white text-sm font-medium font-body pt-8">I am a self-taught developer who always hungry to learn and a perfectionist with the result.  <span className="text-violet">See more.</span></p>

        </div>
        <div className='basis-1/2 w-full h-full relative'>
          <Image
            alt='bg-code'
            src='/bg-code.jpg'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>

      <div className='px-5 lg:px-20'>
      <div className='py-8 flex flex-row items-center'>
        <button className='basis-1/3 rounded-full h-1 bg-gradient-to-r from-transparent to-[#4F405850]'/>
        <p className='basis-1/3 text-center text-4xl text-basic font-semibold font-body'>Skills</p>
        <button className='basis-1/3 rounded-full h-1 bg-gradient-to-r from-[#4F405850] to-transparent'/>
      </div>

      <div className='py-4 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8'>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/django.svg" alt="django" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>Django</p>
        </div>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/node-js.svg" alt="node-js" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>Node JS</p>
        </div>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/react.svg" alt="react" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>React</p>
        </div>
      </div>
      <div className='py-4 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8'>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/react-native.svg" alt="react-native" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>React Native</p>
        </div>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/bootstrap.svg" alt="bootstrap" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>Bootstrap</p>
        </div>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/tailwind.svg" alt="tailwind" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>Tailwind</p>
        </div>
      </div>

      <div className='pt-4 pb-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8'>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/nginx.svg" alt="nginx" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>Nginx</p>
        </div>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/docker.svg" alt="docker" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>Docker</p>
        </div>
        <div className='basis-1/3 items-center w-3/4 flex flex-row space-x-8 px-8 py-9 rounded-md h-36 bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div><Image src="/aws.svg" alt="aws" width={60} height={60}/></div>
          <p className='text-2xl text-basic font-semibold font-body'>AWS</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
