import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Rooms from './components/sections/Rooms'
import Testimonials from './components/sections/Testimonials'
import Awards from './components/sections/Awards'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Testimonials />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
