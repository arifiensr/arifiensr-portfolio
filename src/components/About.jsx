import { Element } from 'react-scroll'
import profileImage from '../assets/images/profilepic.png'

const About = () => {
  return (
    <Element name="about" id="about" className="flex flex-col items-center justify-center min-h-screen mx-auto mt-8 bg-white md:flex-row">
      <div className="container m-auto h-full w-full md:w-[1000px]">
        <div id="about-title" className="flex items-center justify-center w-full">
          <h2 className="mb-4 text-2xl font-bold font-poppins">About Me</h2>
        </div>
        <div id="about-content" className="flex flex-col items-center justify-between w-full md:items-start md:flex-row">
          <div id="about-image" className="flex items-center justify-center md:mt-0 md:w-5/12">
            <div className="w-auto overflow-hidden rounded-full h-80">
              <img src={profileImage} className="object-contain w-full h-full " />
            </div>
          </div>
          <div id="about-text" className="flex items-center justify-start w-full md:w-7/12 ps-4">
            <p className="py-4 leading-7 tracking-wide text-center md:text-start font-poppins">A front-end developer enthusiast with 6+ years of experience managing and building projects in an Indonesian State-owned Company successfully reaches the highest career position as a Project Manager at 27. Skilled at creating responsive websites using JS framework and bootstrap. Eager to face more challenges by learning new knowledge to make a perfect website.</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
