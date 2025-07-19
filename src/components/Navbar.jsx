import { useRef, useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = ['Prologue', 'About', 'Contact']

const Navbar = () => {
  const [isNavVisisble, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navContainerRef = useRef(null)

  const { y: currentScrollY } = useWindowScroll()

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisisble ? 0 : -50,
      opacity: isNavVisisble ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisisble])

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6"
    >
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <nav className="flex items-center justify-between p-7 size-full">
          <div className="flex items-center gap-4">
            <img
              src="/about-1.jpg"
              className="w-[40px] rounded-full"
              alt="Logo"
            />
            <span className="text-xs uppercase ms-2 text-blue-50">
              AI Agent
            </span>
          </div>
          <div className="flex items-center h-full">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
