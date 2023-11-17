import React from 'react';

interface Props {
  number: string;
  content: string;
}

const SideBar = (props: Props) => {
  return (
    <div className="absolute max-md:hidden left-14 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
      <div className="gap-20 flex flex-col">
        <div className="border-l-2 border-[#bbb] h-32 w-0"></div>
        <div className="border-l-2 border-[#bbb] h-32 w-0"></div>
      </div>
      <div className="flex flex-col flex-around w-28 left-0 top-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 text-[#ddd] text-center font-Orbitron">
        <div className="text-2xl tracking-widest">{props.number}</div>
        <div className="text-base font-bold">{props.content}</div>
      </div>
    </div>
  );
};

export default SideBar;
