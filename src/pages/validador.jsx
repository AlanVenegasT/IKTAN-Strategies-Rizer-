import Head from 'next/head'

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Validador() {
  return (

    <>
    
      <Header/>
      <main>
      <Hero/>
      <SecondaryFeatures />  
      </main>
      <Footer />
    </>
  )
}
