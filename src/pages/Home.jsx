import About from '../components/About'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <section id="home" className="relative">
      <Navbar />
      <Intro />
      <About />
      <Cards />
      <Footer />
    </section>
  )
}
