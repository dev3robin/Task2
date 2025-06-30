import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Myskills = () => {
  return (
    <div className='bg-[var(--bgColor)]'>
      <div className='bg-black mx-[15px] rounded-2xl p-[clamp(20px,5vw,50px)]'>
        <div className='flex flex-wrap items-center gap-4 mb-6'>
          <span className='h-[44px] w-[44px] border-2 flex items-center justify-center rounded-full'>
            <FontAwesomeIcon icon={faArrowDown} className="text-white text-xl" />
          </span>
          <p className='h-[44px] flex items-center border-2 px-4 rounded-3xl text-[clamp(14px,2vw,20px)] text-white'>
            Why Choose Me
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-start justify-between gap-6 mb-6'>
          <p className='custom-heading text-[clamp(28px,5vw,58px)] leading-[clamp(40px,6vw,86px)] font-bold text-white'>
            My Extensive <br /> List of Skills
          </p>
          <div className='max-w-xl'>
            <p className='text-[clamp(14px,1.5vw,18px)] font-extralight leading-[clamp(22px,3vw,34px)] text-white'>
              Building the world’s best marketing. Your <br />
              trusted partner for strategy, design, and dev.
            </p>
            <hr className='mt-2 border-white/30' />
          </div>
        </div>

        <div className='flex gap-4 justify-end mb-10'>
          <span className='h-[50px] w-[50px] border-2 flex items-center justify-center rounded-full'>
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </span>
          <span className='h-[50px] w-[50px] border-2 flex items-center justify-center rounded-full'>
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </span>
        </div>

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className={`p-4 rounded-3xl bg-[#141414]/50 flex flex-col items-start text-white transition-all`}>
              <div className='relative my-5 h-[99px] w-[97px] flex items-center justify-center'>
                <div className='absolute bg-[#C5FF41] h-[10px] w-[10px] rounded-full'></div>
                <div className='absolute h-[30px] rotate-60 w-[97px] border rounded-full'></div>
                <div className='absolute h-[30px] -rotate-60 w-[97px] border rounded-full'></div>
                <div className='absolute h-[30px] w-[97px] border rounded-full'></div>
              </div>
              <p className='custom-heading text-[clamp(20px,2vw,26px)] leading-[34px] font-medium mb-4'>
                HTML & CSS
              </p>
              <p className='text-[clamp(14px,1.2vw,16px)] leading-[clamp(22px,3vw,27px)] font-extralight mb-4'>
                Duis aute irure dolor in <br /> reprehenderit in voluptate. Ut <br /> enim ad minim veniam, quis
              </p>
            </div>
            <div className={`p-4 rounded-3xl bg-[#141414]/50 flex flex-col items-start text-white transition-all lg:rotate-12`}>
              <div className='relative my-5 h-[99px] w-[97px] flex items-center justify-center'>
                <div className='absolute bg-[#C5FF41] h-[10px] w-[10px] rounded-full'></div>
                <div className='absolute h-[30px] rotate-60 w-[97px] border rounded-full'></div>
                <div className='absolute h-[30px] -rotate-60 w-[97px] border rounded-full'></div>
                <div className='absolute h-[30px] w-[97px] border rounded-full'></div>
              </div>
              <p className='custom-heading text-[clamp(20px,2vw,26px)] leading-[34px] font-medium mb-4'>
                Javascript
              </p>
              <p className='text-[clamp(14px,1.2vw,16px)] leading-[clamp(22px,3vw,27px)] font-extralight mb-4'>
                Duis aute irure dolor in <br /> reprehenderit in voluptate. Ut <br /> enim ad minim veniam, quis
              </p>
            </div>
            <div className={`p-4 rounded-3xl bg-[#141414]/50 flex flex-col items-start text-white transition-all `}>
              <div className='relative my-5 h-[99px] w-[97px] flex items-center justify-center'>
                <div className='absolute bg-[#C5FF41] h-[10px] w-[10px] rounded-full'></div>
                <div className='absolute h-[30px] rotate-60 w-[97px] border rounded-full'></div>
                <div className='absolute h-[30px] -rotate-60 w-[97px] border rounded-full'></div>
                <div className='absolute h-[30px] w-[97px] border rounded-full'></div>
              </div>
              <p className='custom-heading text-[clamp(20px,2vw,26px)] leading-[34px] font-medium mb-4'>
                Webflow
              </p>
              <p className='text-[clamp(14px,1.2vw,16px)] leading-[clamp(22px,3vw,27px)] font-extralight mb-4'>
                Duis aute irure dolor in <br /> reprehenderit in voluptate. Ut <br /> enim ad minim veniam, quis
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
