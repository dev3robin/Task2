import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const DownBtn = () => {
  return (
    <div className='flex items-center justify-center h-[44px] w-[44px] rounded-full border-1'><FontAwesomeIcon icon={faArrowDown} className="text-xl flex items-center justify-center" /></div>
  )
}

export default DownBtn