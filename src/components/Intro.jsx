import profileImage from '../assets/images/profilepic.png'
import htmlImage from '../assets/images/html.png'
import cssImage from '../assets/images/css.png'
import jsImage from '../assets/images/js.png'
import reactImage from '../assets/images/react.png'
import viteImage from '../assets/images/vite.png'
import bootstrapImage from '../assets/images/bootstrap.png'
import sassImage from '../assets/images/sass.png'
import tailwindImage from '../assets/images/tailwind.png'
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'

const Intro = () => {
  return (
    <section id="intro" className="flex items-center justify-center h-screen bg-slate-50">
      <div className="container w-3/5 m-auto">
        <div id="intro-main" className="flex ">
          <div id="intro-main-text" className="w-7/12 ">
            <h1 className="pb-2 text-5xl font-bold font-poppins">Hi! I'm M. Arifien Syachrizal</h1>
            <h2 className="pb-2 text-3xl font-bold font-oxygen-mono text-red-700">Front-End Web Developer</h2>
            <p className="font-poppins leading-7 tracking-wide">I create visually stunning and intuitive web experiences with a focus on seamless interactions and captivating design. Let's embark on a journey of exceptional web development together!</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/arifiensr/" target="_blank">
                <RxLinkedinLogo className="mt-8 text-4xl hover:text-red-700 transition-all duration-[400ms]" />
              </a>
              <a href="https://github.com/arifiensr" target="_blank">
                <RxGithubLogo className="mt-8 text-4xl hover:text-red-700 transition-all duration-[400ms]" />
              </a>
            </div>
          </div>
          <div id="intro-main-image" className="flex items-center justify-center w-5/12">
            <div className="w-2/3 h-auto overflow-hidden rounded-full">
              <img src={profileImage} className="object-contain w-full h-full " />
            </div>
          </div>
        </div>

        <div id="intro-skills" className="flex h-16 mt-12">
          <div className="flex items-center justify-start w-40 h-full border-r-4 border-r-black">
            <span className="text-2xl font-bold">Tech Stack</span>
          </div>
          <div className="flex flex-auto items-center justify-evenly">
            <img src={htmlImage} className="w-auto h-full" />
            <img src={cssImage} className="w-auto h-full" />
            <img src={jsImage} className="w-auto h-full" />
            <img src={reactImage} className="w-auto h-full" />
            <img src={viteImage} className="w-auto h-full" />
            <img src={bootstrapImage} className="w-auto h-full" />
            <img src={sassImage} className="w-auto h-full" />
            <img src={tailwindImage} className="w-auto h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
