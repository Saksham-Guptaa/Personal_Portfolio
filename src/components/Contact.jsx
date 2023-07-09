import React from 'react'
import {useState , useRef} from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form  , setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading , setLoading] = useState(false);
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left' , "tween" , 0.2 , 1)}
        className="flex-[0.74] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form action='https://getform.io/f/a01f5060-b569-4efb-a644-a0c5f6cf5b0e' method='POST'  
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name"   placeholder="What's your name" className='bg-tertiary py-4 rounded-lg text-white outline-none px-5 placeholder:text-secondary border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email"   placeholder="What's your email" className='bg-tertiary py-4 rounded-lg text-white outline-none px-5 placeholder:text-secondary border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7"  name="message"placeholder="What do you want to say ?" className='bg-tertiary py-4 rounded-lg text-white outline-none px-5 placeholder:text-secondary border-none font-medium' />
          </label>
          <button type="submit"
            className='bg-tertiary py-3 px-8 outline-none font-bold shadow-md shadow-primary text-white'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right' , "tween" , 0.2 , 1 )}
        className="xl:flex-1 xl:auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , "contact")