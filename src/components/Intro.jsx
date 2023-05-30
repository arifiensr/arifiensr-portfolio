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
    <section id="intro" className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="container m-auto w-full h-full md:w-[1000px]">
        <div id="intro-main" className="flex flex-col-reverse items-center justify-center md:flex-row">
          <div id="intro-main-text" className="w-full mt-8 md:w-7/12 md:mt-0">
            <h1 className="pb-2 text-4xl font-bold text-center md:text-5xl font-poppins md:text-start">Hi! I'm Arifien</h1>
            <h2 className="pb-2 text-2xl font-bold text-center text-red-700 md:text-3xl font-oxygen-mono md:text-start">Front-End Web Developer</h2>
            <p className="leading-7 tracking-wide text-center font-poppins md:text-start">I create visually stunning and intuitive web experiences with a focus on seamless interactions and captivating design. Let's embark on a journey of exceptional web development together!</p>
            <div className="flex justify-center gap-3 md:justify-start">
              <a href="https://www.linkedin.com/in/arifiensr/" target="_blank">
                <RxLinkedinLogo className="mt-6 md:mt-8 text-4xl hover:text-red-700 transition-all duration-[400ms]" />
              </a>
              <a href="https://github.com/arifiensr" target="_blank">
                <RxGithubLogo className="mt-6 md:mt-8 text-4xl hover:text-red-700 transition-all duration-[400ms]" />
              </a>
            </div>
          </div>
          <div id="intro-main-image" className="flex items-center justify-center w-full mt-24 md:mt-0 md:w-5/12">
            <div className="w-auto overflow-hidden rounded-full h-80">
              <img src={profileImage} className="object-contain w-full h-full " />
            </div>
          </div>
        </div>

        <div id="intro-skills" className="flex flex-col items-center justify-center h-auto mt-6 md:mt-12 md:h-12 md:flex-row">
          <div className="flex items-center justify-center w-48 h-full p-3 md:p-0 md:w-52 md:justify-start ">
            <span className="px-2 pb-4 text-xl font-bold text-center border-b-2 md:pe-8 md:pb-0 font-oxygen-mono md:border-b-0 md:border-r-2 md:border-r-slate-500 border-b-slate-500">Tech Stack</span>
          </div>
          <div className="flex flex-wrap items-center justify-center w-full mt-4 gap-x-8 gap-y-4 md:justify-evenly md:mt-0 md:flex-nowrap">
            <img src={htmlImage} className="w-auto h-12" />
            <img src={cssImage} className="w-auto h-12" />
            <img src={jsImage} className="w-auto h-12" />
            <img src={reactImage} className="w-auto h-12" />
            <img src={viteImage} className="w-auto h-12" />
            <img src={bootstrapImage} className="w-auto h-12" />
            <img src={sassImage} className="w-auto h-12" />
            <img src={tailwindImage} className="w-auto h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
