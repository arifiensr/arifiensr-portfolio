import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

const Footer = () => {
  return (
    <section id="footer" className="flex w-full text-white bg-indigo-800">
      <div className="container w-full md:w-[1000px] h-16">
        <div className="flex items-center justify-between w-full h-full footer-content">
          <div className="flex items-center footer-text">
            <p className="font-poppins">Copyright © 2023 M. Arifien Syachrizal, All Rights Reserved</p>
          </div>
          <div className="flex gap-4 text-xl footer-links">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <a href="https://www.linkedin.com/in/arifiensr/" target="_blank">
                    <RxLinkedinLogo className="text-2xl hover:animate-bounce" />
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
                    <RxGithubLogo className="text-2xl  hover:animate-bounce" />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="font-oxygen-mono" sideOffset={10}>
                  <p>My Github</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
