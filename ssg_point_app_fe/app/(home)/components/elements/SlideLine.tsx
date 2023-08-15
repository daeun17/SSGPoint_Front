import React from 'react'

interface SlideLineProps {
    topP: number;
    text: string;
    widthDiv2: number;
    topDiv2: number;
}

const SlideLine: React.FC<SlideLineProps> = ({ topP, text, widthDiv2, topDiv2 }) => {
  return (
    <div className="whitespace-pre-wrap w-[313px] h-[15px]">
      <p className={`absolute top-[${topP}px] left-[317px] text-xs leading-[normal] tracking-wider text-center text-black`}>
        <span className="font-['Inter'] font-semibold">
          1
        </span>
        <span className="font-['Inter'] font-light">
          /{text}
        </span>
      </p>
      <div className="w-[266px] h-0.5">
        <div className={`w-[266px] h-[1.6px] absolute top-[${topDiv2}px] left-[23px] bg-[#96c9e6]`} />
        <div className={`h-0.5 absolute top-[${topDiv2}px] left-[23px] bg-black w-[${widthDiv2}px]`} />
      </div>
    </div>
  )
}

export default SlideLine;
