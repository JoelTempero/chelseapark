import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import ScrollToTop from './components/layout/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter basename="/chelseapark">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/latest-news" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
