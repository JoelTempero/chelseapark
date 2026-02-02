import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Rooms from '../components/sections/Rooms'
import Testimonials from '../components/sections/Testimonials'
import Awards from '../components/sections/Awards'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Testimonials />
      <Awards />
      <Contact />
    </>
  )
}
