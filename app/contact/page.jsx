import React from 'react'
import DownBtn from '../components/downBtn'
import Button from '../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='relative bg-[var(--bgColor)] overflow-hidden'>
      <div className='absolute top-0 left-0 h-full w-full -z-1'>
        <img className='rotate-[30deg] w-full h-full object-cover opacity-10' src="/bg-img/headerbg.png" alt="bg" />
      </div>
      <div className='flex flex-col lg:flex-row gap-10 mx-[15px] my-6 relative z-10'>
        <div className='text-[var(--text)] flex-1'>
          <div className='flex items-center gap-2 mb-4'>
            <DownBtn />
            <button className='h-[44px] w-[120px] rounded-full border text-[clamp(14px,1.2vw,16px)]'>Contact</button>
          </div>
          <p className='custom-heading text-[clamp(32px,6vw,78px)] leading-[clamp(48px,8vw,113px)] mb-4'>
            Interested in <span className='bg-black px-3 py-1 rounded-xl text-white inline-block'>work</span> together?
          </p>
          <p className='text-[clamp(14px,1.2vw,18px)] mb-8'>
            We start every new client interaction with an in-depth discovery call where we get to know each other
          </p>
          <Button text={"Schedule a Call"} />
        </div>

        <div className='bg-black text-white rounded-2xl p-6 flex-1 flex flex-col gap-4'>
          <input className='w-full bg-transparent outline-none border-b border-gray-500 custom-heading text-[clamp(14px,1vw,18px)] leading-[34px] placeholder:text-gray-400 focus:border-green-500' type="text" placeholder='Enter your name' />
          <input className='w-full bg-transparent outline-none border-b border-gray-500 custom-heading text-[clamp(14px,1vw,18px)] leading-[34px] placeholder:text-gray-400 focus:border-green-500' type="email" placeholder='Your Email address' />
          <input className='w-full bg-transparent outline-none border-b border-gray-500 custom-heading text-[clamp(14px,1vw,18px)] leading-[34px] placeholder:text-gray-400 focus:border-green-500 mb-6' type="text" placeholder='Describe your projects' />

          <div className='flex flex-wrap gap-4 mb-10'>
            <div className='flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-white hover:text-black transition'>
              <div className='h-[36px] w-[36px] flex items-center justify-center border rounded-full'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <span>Send</span>
            </div>
            <span className='self-center'>or</span>
            <div className='flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-white hover:text-black transition'>
              <div className='h-[36px] w-[36px] flex items-center justify-center border rounded-full'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span>Contact me</span>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
            <p className='text-sm w-full sm:w-auto'>@williamrey</p>
            <div className='flex gap-4 items-center'>
              <div className='w-[30px] h-[1px] bg-white'></div>
              <FontAwesomeIcon icon={faFacebook} className="text-white" />
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
