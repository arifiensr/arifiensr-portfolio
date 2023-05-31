import profileImage from '../assets/images/profilepic.png'
import htmlImage from '../assets/images/html.png'
import cssImage from '../assets/images/css.png'
import jsImage from '../assets/images/js.png'
import reactImage from '../assets/images/react.png'
import viteImage from '../assets/images/vite.png'
import bootstrapImage from '../assets/images/bootstrap.png'
import sassImage from '../assets/images/sass.png'
import tailwindImage from '../assets/images/tailwind.png'
import { Button } from './ui/button'
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'
import { Element, Link } from 'react-scroll'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { SendIcon } from 'lucide-react'

const skills = [
  {
    title: 'HTML',
    image: htmlImage,
  },
  {
    title: 'CSS',
    image: cssImage,
  },
  {
    title: 'Javascript',
    image: jsImage,
  },
  {
    title: 'React',
    image: reactImage,
  },
  {
    title: 'Vite',
    image: viteImage,
  },
  {
    title: 'Bootstrap',
    image: bootstrapImage,
  },
  {
    title: 'SASS',
    image: sassImage,
  },
  {
    title: 'Tailwind',
    image: tailwindImage,
  },
]

const Intro = () => {
  return (
    <Element name="intro" id="intro" className="flex items-center justify-center min-h-screen pb-8 intro bg-slate-50">
      <div className="container m-auto w-full h-full md:w-[1000px]">
        <div id="intro-main" className="flex flex-col-reverse items-center justify-center md:flex-row">
          <div id="intro-main-text" className="w-full mt-8 md:w-7/12 md:mt-0">
            <h1 className="pb-2 text-4xl font-bold text-center md:text-5xl font-poppins md:text-start">Hi! I'm Arifien</h1>
            <h2 className="pb-2 text-2xl font-bold text-center text-indigo-600 md:text-3xl font-oxygen-mono md:text-start">Front-End Web Developer</h2>
            <p className="leading-7 tracking-wide text-center font-poppins md:text-start">I create visually stunning and intuitive web experiences with a focus on seamless interactions and captivating design. Let's embark on a journey of exceptional web development together!</p>
            <div className="flex items-center justify-center gap-3 mt-6 md:justify-start md:mt-12 ">
              {/* <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://www.linkedin.com/in/arifiensr/" target="_blank">
                      <RxLinkedinLogo className=" text-4xl hover:text-indigo-600 transition-all duration-[400ms]" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="font-oxygen-mono" sideOffset={10}>
                    <p>My LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://github.com/arifiensr" target="_blank">
                      <RxGithubLogo className=" text-4xl hover:text-indigo-600 transition-all duration-[400ms]" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="font-oxygen-mono" sideOffset={10}>
                    <p>My Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
              <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={1000}>
                <Button className="flex gap-2 transition-all duration-500 hover:bg-indigo-700 font-poppins">
                  Let's Connect! <SendIcon size={18} />
                </Button>
              </Link>
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
            {skills.map((item, index) => {
              return (
                <TooltipProvider key={item.title + index} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <img src={item.image} className="w-auto h-12 transition-all hover:text-red-700 duration-[400ms]" />
                    </TooltipTrigger>
                    <TooltipContent className="font-oxygen-mono" sideOffset={10}>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Intro
