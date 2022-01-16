import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'

export default function Test() {
  return (
    <div>
      <Head>
        <title>Aziz Saeful Hidayat</title>
        <meta name="description" content="Senior Django, React, React Native Developer" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header/>
      <Footer/>
    </div>
  )
}
