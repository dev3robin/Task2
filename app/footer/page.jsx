import React from 'react';

const Footer = () => {
  return (
    <div className='relative'>

      <div className='bg-[var(--bg)] -z-1 absolute top-0 left-0 h-full w-full'></div>

      <div className='bg-black mx-[15px] p-[clamp(20px,5vw,50px)] rounded-2xl relative z-10 flex flex-col lg:flex-row lg:justify-between gap-10'>
        
        <div className='flex flex-row lg:flex-col justify-between gap-6'>
          <div className='custom-heading text-[clamp(24px,4vw,34px)] leading-[1.2] text-[#C5FF41]'>DVELOP.ME</div>
          <div className='custom-heading text-[clamp(18px,3vw,24px)] leading-[1.2] text-white'>BESNIK</div>
        </div>

        <div className='flex flex-col'>

          <div className='custom-heading text-white text-[clamp(36px,8vw,64px)] leading-[1.2] mb-12'>
            AS you can
          </div>

          <div className='flex flex-wrap gap-12 justify-between'>

            <div className='flex flex-col min-w-[150px]'>
              <h1 className='custom-heading mb-4 text-[clamp(14px,1vw,16px)] text-gray-400'>Say hello</h1>
              <p className='custom-heading text-[clamp(12px,1vw,14px)] leading-[1.6] text-white'>HELLO@DEVELOP.ME.COM</p>
              <p className='custom-heading text-[clamp(12px,1vw,14px)] leading-[1.6] text-white'>MAHBUBUL@ME.COM</p>

              <h1 className='custom-heading mt-6 mb-4 text-[clamp(14px,1vw,16px)] text-gray-400'>Call</h1>
              <ul className='custom-heading text-[clamp(12px,1vw,14px)] text-white leading-[1.6]'>
                <li>+784549 4981 00</li>
                <li>+8845 0100 211</li>
              </ul>
            </div>

            <div className='min-w-[100px]'>
              <h1 className='custom-heading mb-4 text-[clamp(14px,1vw,16px)] text-gray-400'>Menu</h1>
              <ul className='custom-heading text-[clamp(12px,1vw,14px)] text-white leading-[1.6] space-y-1'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
              </ul>
            </div>

            <div className='min-w-[100px]'>
              <h1 className='custom-heading mb-4 text-[clamp(14px,1vw,16px)] text-gray-400'>Social</h1>
              <ul className='custom-heading text-[clamp(12px,1vw,14px)] text-white leading-[1.6] space-y-1'>
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>BEHANCE</li>
                <li>DRIBBLE</li>
              </ul>
            </div>

          </div>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-10 gap-4 text-gray-400 text-[clamp(12px,1vw,16px)]'>
            <div className='custom-heading'>© devlop.me 2022</div>
            <div className='custom-heading'>PRIVACY - TERMS</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;
