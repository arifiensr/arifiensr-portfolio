import { Element } from 'react-scroll'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import photologueMockup from '../assets/images/photologueMockup.png'
import katflixMockup from '../assets/images/katflixMockup.png'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import { FaBootstrap, FaReact, FaSass } from 'react-icons/fa'

const projects = [
  {
    title: 'Photologue',
    description: 'Photologue is a photo sharing website that allows photographers to showcase their work, connect with others in the community, and gain exposure in a visually appealing and interactive platform.',
    preview: photologueMockup,
    tech() {
      return (
        <>
          <FaReact />
          <FaBootstrap />
          <FaSass />
        </>
      )
    },
    github: 'https://github.com/arifiensr/photologue',
    demo: 'https://photologue.netlify.app/',
  },
  {
    title: 'Katflix',
    description: 'Katflix is a versatile movie streaming website that offers a vast collection of films across genres and languages, providing users with a convenient and enjoyable platform to indulge in the magic of cinema.',
    preview: katflixMockup,
    tech() {
      return (
        <>
          <FaReact />
          <FaBootstrap />
        </>
      )
    },
    github: 'https://github.com/arifiensr/katflix-react',
    demo: 'https://katflix.netlify.app/',
  },
]

const Projects = () => {
  return (
    <Element name="projects" id="projects" className="flex items-center justify-center w-full min-h-screen pt-20 m-auto bg-slate-50">
      <div className="container flex items-center justify-center w-full md:w-[1000px] flex-col gap-4">
        <div id="projects-title" className="flex items-center justify-center w-full">
          <h2 className="text-2xl font-bold font-poppins">Projects</h2>
        </div>
        <div className="flex flex-col gap-8 card-content-wrapper">
          {projects.map((item, index) => {
            return (
              <Card key={item.title + index} className="w-full shadow-lg font-poppins">
                <CardContent className={`flex p-4 gap-4 flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  <div className="w-full md:w-[400px] card-image h-auto m-auto">
                    <img src={item.preview} className="object-cover w-full h-full rounded-lg shadow-lg" />
                  </div>
                  <div className="flex flex-col flex-1 text-center card-desc">
                    <h1 className="pb-2 text-xl font-bold font-poppins">{item.title}</h1>
                    <p className="pb-4">{item.description}</p>
                    <div className="flex items-center justify-center gap-6 pb-5 text-3xl card-desc-tech">{item.tech()}</div>
                    <div className="flex items-end justify-center w-full h-full gap-6 card-desc-button">
                      <a href={item.github} target="_blank">
                        <Button className="flex gap-2 transition-all duration-500 hover:bg-indigo-700">
                          Github <GithubIcon size={20} />
                        </Button>
                      </a>
                      <a href={item.demo} target="_blank">
                        <Button className="flex gap-2 transition-all duration-500 hover:bg-indigo-700">
                          Demo <ExternalLinkIcon size={20} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </Element>
  )
}

export default Projects
