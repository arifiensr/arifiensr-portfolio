import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <section id="home" className="relative">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}

export default Home
