import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <section id="home" className="relative">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </section>
  )
}

export default Home
