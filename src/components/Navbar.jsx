const Navbar = () => {
  return (
    <section id="navbar" className="fixed top-0 flex items-center justify-between w-full h-16 p-8 bg-white w navbar drop-shadow">
      <div id="navbar-title" className="flex-initial cursor-pointer">
        <span className="text-xl font-bold font-major-mono-display hover:text-red-700 transition-all dsf duration-[400ms]">
          <span className="">A</span>rifiensr
        </span>
      </div>
      <div id="navbar-links" className="flex-initial">
        <ul className="flex gap-4 font-oxygen-mono">
          <li className="p-1 m-4 transition-all border-b-2 border-white hover:text-red-700 hover:border-red-700 duration-[400ms]">
            <a href="#">Home</a>
          </li>
          <li className="p-1 m-4 transition-all border-b-2 border-white hover:text-red-700 hover:border-red-700 duration-[400ms]">
            <a href="#about">About</a>
          </li>
          <li className="p-1 m-4 transition-all border-b-2 border-white hover:text-red-700 hover:border-red-700 duration-[400ms]">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-1 m-4 transition-all border-b-2 border-white hover:text-red-700 hover:border-red-700 duration-[400ms]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
