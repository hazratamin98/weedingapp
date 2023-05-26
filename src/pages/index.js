import Image from 'next/image'


//Components
import Navbar from '../components/Navbar'
import HeroFooter from "../components/HeroFooter"
import Hero from '@/components/Hero'

import HomeContent from "../contents/HomeContents"



export default function Home() {
  return (
    <div className='bg-bg-color '>

      <HomeContent />
    </div>
  )
}
