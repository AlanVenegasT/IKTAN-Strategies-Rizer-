import Head from 'next/head'

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Hero } from '@/components/Hero'
import Misiob from "@/components/misiob"



export default function somos() {
  return (

    <>
      <Header/>
      <main>
      <Hero/>
      <Misiob/>

      </main>
      <Footer />
    </>
  )
}
