import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
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
    })
  }, [])

  return (
    <section className="w-full min-h-screen bg-[#010204] text-blue-50 px-[12vw]">
      <div
        className="flex flex-col items-center justify-between gap-10 pt-20 md:flex-row"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p>
            At NeuralForge, we specialize in building advanced AI agents
            designed to solve complex tasks autonomously. Our mission is to push
            the boundaries of what intelligent systems can do — from virtual
            assistants to real-time decision-making engines.
          </p>
        </div>
        <img
          src="/about-1.webp"
          alt="Imagen 1"
          className="w-full rounded-lg md:w-1/2"
        />
      </div>

      <div
        className="flex flex-col-reverse items-center justify-between gap-10 pt-4 md:flex-row"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <img
          src="/about-2.webp"
          alt="Imagen 2"
          className="w-full rounded-lg md:w-1/2"
        />
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold">Our Approach</h2>
          <p>
            We combine deep learning, reinforcement learning, and natural
            language processing to create agents that think, learn, and adapt.
            Every AI agent we build is tailored to meet real-world demands in
            sectors like automation, finance, and digital interaction.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-between gap-10 pt-4 md:flex-row"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p>
            We envision a future where intelligent agents empower humans by
            automating the complex and repetitive, allowing more time for
            creativity, empathy, and meaningful work. We are building toward
            that future — responsibly and transparently.
          </p>
        </div>
        <img
          src="/about-3.webp"
          alt="Imagen 3"
          className="w-full rounded-lg md:w-1/2"
        />
      </div>
    </section>
  )
}

export default About
