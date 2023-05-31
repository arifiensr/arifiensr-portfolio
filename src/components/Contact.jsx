import { Element } from 'react-scroll'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { RiMailSendLine } from 'react-icons/ri'
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { ArrowRightIcon } from 'lucide-react'

const contact = [
  {
    title: 'Email',
    icon(style) {
      return <RiMailSendLine className={style} />
    },
    content: 'arifiensr@gmail.com',
    link: 'mailto:arifiensr@gmail.com',
  },
  {
    title: 'LinkedIn',
    icon(style) {
      return <FaLinkedin className={style} />
    },
    content: 'arifiensr',
    link: 'https://www.linkedin.com/in/arifiensr/',
  },
  {
    title: 'Telegram',
    icon(style) {
      return <FaTelegramPlane className={style} />
    },
    content: 'arifiensr',
    link: 'https://t.me/arifiensr',
  },
]

const Contact = () => {
  return (
    <Element name="contact" id="contact" className="flex items-center justify-center pt-20 pb-8 m-auto">
      <div className="container w-full h-full md:w-[1000px] flex flex-col">
        <div className="flex items-center justify-center w-full h-auto pb-4 text-2xl contact-title">
          <h1 className="font-bold font-poppins">Contact</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-8 contact-content md:flex-row">
          {contact.map((item, index) => {
            return (
              <Card key={item.title + index} className="w-full shadow-lg cursor-pointer md:w-1/3 font-poppins group">
                <a href={item.link} target="_blank">
                  <CardContent className={`flex p-4 flex-col justify-center items-center text-center`}>
                    {item.icon('text-2xl mb-2')}
                    <h1 className="text-xl font-bold font-poppins">{item.title}</h1>
                    <p className="pb-4 text-muted-foreground">{item.content}</p>
                    <p className="flex items-center gap-2 text-muted-foreground group-hover:text-indigo-600">
                      Connect <ArrowRightIcon className="flex transition-all duration-500 group-hover:translate-x-2" size={18} />
                    </p>
                  </CardContent>
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </Element>
  )
}

export default Contact
