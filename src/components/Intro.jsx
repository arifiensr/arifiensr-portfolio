import profileImage from '../assets/images/profilepic.png'

const Intro = () => {
  return (
    <section id="intro" className="flex items-center justify-center h-screen bg-slate-50">
      <div className="container w-3/5 m-auto">
        <div id="intro-main" className="flex ">
          <div id="intro-main-text" className="w-7/12 ">
            <h1 className="pb-2 text-5xl font-bold font-poppins">Hi! I'm M. Arifien Syachrizal</h1>
            <h2 className="pb-2 text-3xl font-bold font-oxygen-mono">Front-End Web Developer</h2>
            <p className="font-poppins">I create visually stunning and intuitive web experiences with a focus on seamless interactions and captivating design. Let's embark on a journey of exceptional web development together!</p>
          </div>
          <div id="intro-main-image" className="w-5/12 overflow-auto rounded-full">
            <img src={profileImage} className="object-cover w-full h-full " />
          </div>
        </div>

        <div id="intro-skills" className="flex border-2">
          <div className="w-3/12 border-3 border-r-black">Tech Stack</div>
          <div className="w-9/12">Skill</div>
        </div>
      </div>
    </section>
  )
}

export default Intro