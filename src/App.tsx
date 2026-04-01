import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Methodology from './components/sections/Methodology'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import { GeometricBackground } from './components/ui/GeometricBackground'

export default function App() {
  return (
    <>
      <GeometricBackground />
      <Layout>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Methodology />
        <Education />
        <Contact />
      </Layout>
    </>
  )
}
