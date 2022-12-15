import Head from 'next/head'

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Hero } from '@/components/Hero'

import Hero2 from '@/components/Hero2'
import Imgfaqs from '@/components/Imgfaqs'


export default function Validador() {
  return (

    <>
    
      <Header/>
      <main>
      <Hero2/>
      <Imgfaqs/>
      
     
      </main>
      <Footer />
    </>
  )
}
