import React from 'react';
import Btn from '../components/btn';
import DownBtn from '../components/downBtn';

const Aboutme = () => {
  return (
    <div className="relative min-h-[710px] w-full text-[var(--text)] bg-[var(--bg)] -z-2 overflow-hidden">

      <div className='absolute top-0 left-0 -z-1 h-full w-full'>
        <img className='rotate-[160deg] w-full h-full object-cover' src="/bg-img/headerbg.png" alt="" />
      </div>

      <div className='mx-[15px] px-[clamp(16px,4vw,50px)] py-[clamp(20px,6vw,50px)]'>

        <div className='flex items-center justify-end gap-2 mr-0 sm:mr-16 mb-8'>
          <DownBtn />
          <div className='flex items-center justify-center h-[44px] w-[150px] px-4 rounded-3xl border text-[clamp(14px,1.5vw,16px)]'>
            About
          </div>
        </div>

        <div className='sm:mr-16'>
          <p className='custom-heading text-right font-bold text-[clamp(32px,6vw,68px)] leading-[clamp(40px,8vw,126px)]'>
            I’ve been
            <span className='bg-black text-white px-4 py-2 rounded-xl mx-2 inline-block'>
              Developing
            </span>
            <br />
            Websites since
            <span className='bg-black mt-4 text-white px-4 py-2 rounded-xl mx-2 inline-block'>
              2013
            </span>
          </p>
        </div>

        <div className='text-center mt-4 text-[clamp(14px,1.5vw,18px)] sm:mr-16'>
          <p>
            We start every new client interaction with an in-depth discovery call where
            we get to know each other and recommend the best course of action.
          </p>
        </div>

        <div className='flex flex-col md:flex-row  mt-20 gap-10'>
          <p className='text-[clamp(22px,1.5vw,34px)] font-semibold'>PREVIOUSLY WORKED ON</p>
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-wrap justify-center md:justify-start gap-6'>
              <div className='transform md:rotate-[25deg]'>
                <Btn width="276px" height="90px" text="awwwards" css="black" color="white" />
              </div>
              <div>
                <Btn width="276px" height="90px" text="facebook" />
              </div>
              <div className='transform md:rotate-[25deg]'>
                <Btn width="276px" height="90px" text="cssDesignAwaards" />
              </div>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start gap-6'>
              <div>
                <Btn width="276px" height="90px" text="CSSVINNER" font="font-bold" />
              </div>
              <div className='transform md:-rotate-[10deg]'>
                <Btn width="276px" height="90px" text="/thoughtworks" />
              </div>
              <div>
                <Btn width="276px" height="90px" text="AUTODESK" font="font-extrabold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
