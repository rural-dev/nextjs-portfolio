import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomSlider from '../components/CustomSlider'

export default function ProjectDetail() {
  return (
    <div>
      <Head>
        <title>Projects Detail</title>
        <meta name="description" content="Senior Django, React, React Native Developer" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header/>
      <div className='px-20'>
        <div className='py-8 flex flex-col items-start'>
          <h1 className='text-center text-4xl text-basic font-semibold font-body'>Lorem Ipsum - E Commerce Web</h1>
        </div>
        <CustomSlider/>
        <button className="mr-auto pt-20  text-violet border-b-2 border-violet text-xs font-medium font-body">Visit Website</button>
        <p className='pt-4 text-xs text-basic font-medium font-body'>Client : Lorem Ipsum</p>
        <p className='text-xs text-basic font-medium font-body'>Year : 2021</p>
        <p className='pt-4 text-xs text-basic font-medium font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et lectus odio aliquet posuere porta et nisl scelerisque. In id a eget risus. Aliquet vitae dui fermentum, lobortis elit eget at. Ut nibh ut erat pulvinar. At purus, suspendisse aliquet diam quisque scelerisque. Dui sed et commodo euismod duis. Viverra aenean molestie sed mauris tortor turpis. Mauris eu suspendisse varius elit leo et purus. Dolor egestas ut tincidunt proin est senectus et.</p>
        <p className='pt-4 text-xs text-basic font-medium font-body'>Lorem ipsum dolor sit amet</p>
        <p className='pt-4 text-xs text-basic font-medium font-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et lectus odio aliquet posuere porta et nisl scelerisque. In id a eget risus. Viverra aenean molestie sed mauris tortor turpis. Mauris eu suspendisse varius elit leo et purus. Dolor egestas ut tincidunt proin est senectus et.</p>

        <div className='py-8 flex flex-row items-center'>
          <p className='basis-1/4 text-2xl text-basic font-semibold font-body'>Other Projects</p>
          <button className='basis-3/4 rounded-full h-1 bg-gradient-to-r from-[#4F405850] to-transparent'/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
