import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'

export default function Project() {
  return (
    <div>
      <Head>
        <title>Projects Completed</title>
        <meta name="description" content="Senior Django, React, React Native Developer" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header/>
      <div className='px-10 lg:px-20'>
        <div className='py-8 flex flex-row items-center'>
          <button className='basis-1/3 rounded-full h-1 bg-gradient-to-r from-transparent to-[#4F405850]'/>
          <p className='basis-1/3 text-center text-4xl text-basic font-semibold font-body'>Projects</p>
          <button className='basis-1/3 rounded-full h-1 bg-gradient-to-r from-[#4F405850] to-transparent'/>
        </div>
        <div className='my-8 rounded-md flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div className='lg:basis-1/3 rounded-md h-[220px] lg:h-[220px] relative'>
            <img src="/project-1.jpg" alt="project-1.jpg" />
          </div>
          <div className='lg:basis-2/3 px-8 py-5 lg:py:0 rounded-md flex flex-col'>
            <p className='text-2xl text-basic font-semibold font-body'>Lorem App - Mobile App</p>
            <p className='pt-4 text-xs text-basic font-semibold font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate blandit sit.</p>
            <button className="mr-auto pt-4  text-violet border-b-2 border-violet text-xs font-medium font-body">
              <Link href="/project-detail">
                <a>View case study</a>
              </Link>
            </button>
          </div>
        </div>
        <div className='my-8 rounded-md flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div className='lg:basis-1/3 rounded-md lg:h-[220px] relative'>
          <img src="/project-2.jpg" alt="project-2.jpg" />
          </div>
          <div className='lg:basis-2/3 px-8 py-5 lg:py:0 rounded-md flex flex-col'>
            <p className='text-2xl text-basic font-semibold font-body'>Lorem Ipsum - E Commerce Web</p>
            <p className='pt-4 text-xs text-basic font-semibold font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate blandit sit.</p>
            <button className="mr-auto pt-4  text-violet border-b-2 border-violet text-xs font-medium font-body">See detail</button>
          </div>
        </div>
        <div className='my-8 rounded-md flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div className='lg:basis-1/3 rounded-md lg:h-[220px] relative'>
          <img src="/project-3.jpg" alt="project-3.jpg" />
          </div>
          <div className='lg:basis-2/3 px-8 py-5 lg:py:0 rounded-md flex flex-col'>
            <p className='text-2xl text-basic font-semibold font-body'>Lorem Ipsum - Store App</p>
            <p className='pt-4 text-xs text-basic font-semibold font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate blandit sit.</p>
            <button className="mr-auto pt-4  text-violet border-b-2 border-violet text-xs font-medium font-body">View case study</button>
          </div>
        </div>
        <div className='my-8 rounded-md flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#4F405810] to-transparent'>
          <div className='lg:basis-1/3 rounded-md lg:h-[220px] relative'>
          <img src="/project-4.jpg" alt="project-4.jpg" />
          </div>
          <div className='lg:basis-2/3 px-8 py-5 lg:py:0 rounded-md flex flex-col'>
            <p className='text-2xl text-basic font-semibold font-body'>Lorem Web - Drink Shop Web</p>
            <p className='pt-4 text-xs text-basic font-semibold font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate blandit sit.</p>
            <button className="mr-auto pt-4  text-violet border-b-2 border-violet text-xs font-medium font-body">See detaily</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
