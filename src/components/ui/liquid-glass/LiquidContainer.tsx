'use client';

type Props = {
  children: React.ReactNode;
   
};

export default function LiquidContainer( {children} : Props) {
  return (
    <div className="flex items-center justify-center h-ful w-full  relative">
      <svg className="absolute w-0 h-0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0  0 0 0 20 -10 " />  
        </filter>
      </svg>

      <div className="relative w-full h-full" style={{ filter: 'url(#gooey)' }}>{children}</div>
    </div>
  );
}



 {/* <h1 className="absolute text-black top-0 left-0">hello</h1>
        <div className="absolute top-0 left-0 h-50 w-40 bg-black  rounded">.</div>
        <span className="absolute w-20 h-20 bg-white shadow-[inset_0_0_20px_10px_#006eff] left-20 rounded-full top-0" ></span> */}
         
        {/* <span className="absolute w-20 h-20 rounded-full bg-white shadow-[inset_0_0_20px_10px_#006eff] left-0 top-0" /> */}
        {/* <span className="absolute w-20 h-20 rounded-full bg-white shadow-[inset_0_0_20px_10px_#006eff] left-[120px] top-0" />
        <span className="absolute w-20 h-20 rounded-full bg-white shadow-[inset_0_0_20px_10px_#006eff] left-[240px] top-0" /> */}

        {/* Animated liquid bubble */}
        {/* <motion.span
          className="absolute w-20 h-20 rounded-full bg-gradient-to-center from-[#2393c7] to-[#c6edff] top-0"
          animate={{
            x: ['-20px', '120px', '260px', '120px', '-20px'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        /> */}