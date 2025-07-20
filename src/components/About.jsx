// About.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = ({ title, text, imgSrc, reverse = false, refSetter }) => (
  <div
    className={`flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center justify-between gap-10 pt-10`}
    ref={refSetter}
    id="about"
  >
    <div className="space-y-4 md:w-1/2">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{text}</p>
    </div>
    <img src={imgSrc} alt={title} className="w-full rounded-lg md:w-1/2" />
  </div>
)

const About = () => {
  const sectionsRef = useRef([])

  const animateSection = (el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (el) animateSection(el)
    })
  }, [])

  return (
    <section className="w-full min-h-screen bg-[#010204] text-blue-50 px-[12vw]">
      <AboutSection
        title="Who We Are"
        text="At NeuralForge, we specialize in building advanced AI agents designed to solve complex tasks autonomously. Our mission is to push the boundaries of what intelligent systems can do — from virtual assistants to real-time decision-making engines."
        imgSrc="/about-1.webp"
        refSetter={(el) => (sectionsRef.current[0] = el)}
      />
      <AboutSection
        title="Our Approach"
        text="We combine deep learning, reinforcement learning, and natural language processing to create agents that think, learn, and adapt. Every AI agent we build is tailored to meet real-world demands in sectors like automation, finance, and digital interaction."
        imgSrc="/about-2.webp"
        reverse
        refSetter={(el) => (sectionsRef.current[1] = el)}
      />
      <AboutSection
        title="Our Vision"
        text="We envision a future where intelligent agents empower humans by automating the complex and repetitive, allowing more time for creativity, empathy, and meaningful work. We are building toward that future — responsibly and transparently."
        imgSrc="/about-3.webp"
        refSetter={(el) => (sectionsRef.current[2] = el)}
      />
    </section>
  )
}

export default About
