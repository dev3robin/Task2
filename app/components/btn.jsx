import React from 'react';

const Btn = ({ text, css, color, height, width,font }) => {
  return (
    <div
      className={`font-${font} flex items-center justify-center rounded-full border bg-${css} text-${color}`}
      style={{
        height: height || 'auto',
        width: width || 'auto'
      }}
    >
      {text}
    </div>
  );
};

export default Btn;
