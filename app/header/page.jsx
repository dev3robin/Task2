'use client'
import React from 'react';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ThemeToggle from '../components/ThemeToggle';
const Header = ({isDark,toggleTheme}) => {
  return (
      <div className='relative z-10 max-w-[1440px] w-full min-h-[75vh] bg-white overflow-hidden'
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <div className='absolute top-0 left-0 -z-10 w-full h-full'>
          <img src="/bg-img/headerbg.png" alt="" className='w-full h-full' />
        </div>

        <nav className='h-[114px] px-[15px] overflow-hidden rounded-bl-3xl rounded-br-3xl backdrop-blur-3xl'>
          <div className='flex items-center justify-between py-[28px] px-[35px] '>
            <p className="custom-heading text-[clamp(16px,3vw,34px)] leading-[1.1] font-bold uppercase">
              devlop.me
            </p>

            <div className='flex items-center gap-2'>
              <ul className="flex items-center list-none overflow-hidden">
                {['Home', 'About', 'Portfolio', 'Blog'].map((item, index) => (
                  <li
                    key={index}
                    className={`text-[clamp(14px,1.2vw,18px)] px-4 py-1 rounded-lg hover:bg-black hover:text-purple-500 transition-all duration-300 ${
                      item === 'Blog' ? 'hidden sm:block' : ''
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <div className='hidden md:flex'>
                <Button text={"Start Project"} />
              </div>
            </div>
          </div>
        </nav>
        <main className='z-10 px-[15px] mt-[60px] w-[min(1128px,90%)] mx-auto flex flex-col gap-8'>
          <p className='custom-heading font-bold text-[clamp(28px,6vw,78px)] leading-[clamp(36px,8vw,100px)]'>
            Trusted 
            <span className='bg-black text-white mx-4 px-2 py-1 rounded-[11px] inline-block'>
              Partner
            </span> 
            for <br />
            Your Website Develop.
          </p>

          <div className='flex flex-col  lg:flex-row gap-6 items-center'>

            <div className='flex flex-col items-start lg:-rotate-90 lg:mt-20'>
              <p className='text-[clamp(14px,1.2vw,16px)] mb-1'>@williamrey</p>
              <div className='flex gap-4 items-center'>
                <div className='w-[30px] bg-[var(--text)] h-[2px]'></div>
                <FontAwesomeIcon icon={faFacebook} className="text-[var(--text)]" />
                <FontAwesomeIcon icon={faInstagram} className="text-[var(--text)]" />
                <FontAwesomeIcon icon={faTwitter} className="text-[var(--text)]" />
              </div>
            </div>

            <div className='flex flex-col gap-4 max-w-xl items-baseline'>
              <p className='text-[clamp(12px,1.8vw,20px)] font-extralight leading-[clamp(26px,3vw,33px)]'>
                Building the world’s best marketing websites for over a decade. <br />
                Your trusted partner for strategy, design, and dev.
              </p>
              <Button text={"Schedule a Call"} />
            </div>
          </div>
        </main>
      </div>
  );
};

export default Header;
