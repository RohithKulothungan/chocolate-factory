import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Story from './components/Story'
import Craft from './components/Craft'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Story />
        <Craft />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
