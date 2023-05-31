import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about" id="about" className="flex flex-col items-center justify-center mx-auto bg-white md:py-32 md:flex-row">
      <div className="container m-auto h-full w-full md:w-[1000px]">
        <div id="about-content" className="flex flex-col items-center justify-between w-full gap-6 md:items-start md:flex-row">
          <div id="about-image" className="flex items-center justify-center w-full mt-24 bg-no-repeat bg-cover shadow-2xl md:mt-0 md:w-5/12 bg-profile-picture2 animate-blob">
            <div className="w-auto overflow-hidden rounded-full h-80"></div>
          </div>
          <div id="about-text" className="flex flex-col items-center justify-center w-full pt-6 md:items-start md:w-7/12 md:pt-0">
            <h1 className="text-2xl font-bold font-poppins">About Me</h1>
            <p className="py-4 leading-7 tracking-wide text-center md:text-start font-poppins">A front-end developer enthusiast with 6+ years of experience managing and building projects in an Indonesian State-owned Company successfully reaches the highest career position as a Project Manager at 27. Skilled at creating responsive websites using JS framework and bootstrap. Eager to face more challenges by learning new knowledge to make a perfect website.</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
