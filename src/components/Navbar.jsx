export default function Navbar() {
  return (
    <section id="navbar" className="flex items-center justify-between h-16 p-8 bg-white navbar drop-shadow">
      <div id="navbar-title" className="flex-initial">
        <span className="text-xl font-bold font-major-mono-display">Arifiensr</span>
      </div>
      <div id="navbar-links" className="flex-initial">
        <ul className="flex gap-8 font-oxygen-mono">
          <li className="transition-all hover:text-green-500 hover:scale-105"><a href="#">Home</a></li>
          <li className="transition-all hover:text-green-500 hover:scale-105"><a href="#about">About</a></li>
          <li className="transition-all hover:text-green-500 hover:scale-105"><a href="#projects">Projects</a></li>
          <li className="transition-all hover:text-green-500 hover:scale-105"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </section>
  )
}
