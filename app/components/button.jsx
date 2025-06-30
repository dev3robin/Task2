import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Button({ text }) {
  return (
    <div className="group w-fit relative overflow-hidden ml-6"
    >
      <div className="flex items-center gap-2 border  border-[var(--border)] rounded-full h-[58px] w-[182px] transition-all duration-500 ease-in-out relative z-10">
        <span className='border  border-[var(--border)] rounded-full h-[38px] w-[38px] flex items-center justify-center'>
          <FontAwesomeIcon icon={faArrowRight} className="text-lg text-[var(--border)]" />
        </span>
        <p className="text-[var(--text)]">{text}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#BAFF12] to-[#E8FFB0] opacity-0 group-hover:opacity-60 transition-all duration-500 z-0 rounded-full"></div>
    </div>
  );
}
