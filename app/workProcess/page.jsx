import React from 'react'
import DownBtn from '../components/downBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Workprocess = () => {
  return (
    <div className='bg-[var(--bgColor)]'>
      <div className='bg-[#141414] flex flex-col mx-[15px] rounded-2xl p-[clamp(20px,5vw,50px)]'>

        <div className='flex flex-wrap items-center gap-6 md:gap-16 mb-10'>
          <div className='flex items-center gap-2'>
            <DownBtn />
            <button className='border h-[44px] w-[175px] rounded-full text-white text-[clamp(14px,1.2vw,16px)]'>Work Process</button>
          </div>
          <div className='custom-heading text-[clamp(28px,6vw,58px)] leading-[clamp(38px,8vw,86px)] text-white'>
            My Work Process
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          <div className='rounded-xl bg-black p-4 md:p-6'>
            <div className='flex items-center justify-between mb-6'>
              <button className='bg-[#C5FFEE] text-black custom-heading text-[clamp(16px,1.2vw,20px)] font-normal h-[34px] w-[118px] rounded-full'>
                Discovery
              </button>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                <span className='underline text-white text-[clamp(14px,1vw,16px)]'>Read More</span>
              </div>
            </div>
            <p className='text-[clamp(14px,1.1vw,18px)] leading-[clamp(24px,2.5vw,33px)] font-extralight text-white'>
              We start every new client interaction with an in-depth discovery call where
              we get to know each other, discuss your current and future objectives,
              and recommend the best course of action.
            </p>
          </div>

          <div className='rounded-xl bg-[#C5FF41] p-4 md:p-6 transform md:rotate-2'>
            <div className='flex items-center justify-between mb-6'>
              <button className='bg-black text-white custom-heading text-[clamp(16px,1.2vw,20px)] font-normal h-[34px] w-[104px] rounded-full'>
                Strategy
              </button>
              <div className='flex items-center gap-2 text-black'>
                <FontAwesomeIcon icon={faArrowRight} className="text-black" />
                <span className='underline text-[clamp(14px,1vw,16px)]'>Read More</span>
              </div>
            </div>
            <p className='text-[clamp(14px,1.1vw,18px)] leading-[clamp(24px,2.5vw,33px)] font-extralight text-black'>
              Every end-to-end project begins with a bespoke pre-build strategy. From brand ID
              consultation to code reviews, we’re here to set the stage for success.
            </p>
          </div>
          <div className='rounded-xl bg-black p-4 md:p-6'>
            <div className='flex items-center justify-between mb-6'>
              <button className='bg-[#C5FFEE] text-black h-[34px] w-[118px] rounded-full'>
                Design
              </button>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                <span className='underline text-white text-[clamp(14px,1vw,16px)]'>Read More</span>
              </div>
            </div>
            <p className='text-[clamp(14px,1.1vw,18px)] leading-[clamp(24px,2.5vw,33px)] font-extralight text-white'>
              After fully understanding your brand, we begin design. Every page is crafted,
              reviewed, and approved by you to ensure your vision is brought to life.
            </p>
          </div>

          <div className='rounded-xl bg-black p-4 md:p-6'>
            <div className='flex items-center justify-between mb-6'>
              <button className='bg-[#C5FFEE] text-black h-[34px] w-[118px] rounded-full'>
                Build
              </button>
              <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                <span className='underline text-white text-[clamp(14px,1vw,16px)]'>Read More</span>
              </div>
            </div>
            <p className='text-[clamp(14px,1.1vw,18px)] leading-[clamp(24px,2.5vw,33px)] font-extralight text-white'>
              Whether you hand off finished designs or we built them, we apply our proven
              Webflow development process to turn vision into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workprocess;
