import { useState } from 'react';
import rightArrowIcon from '../assets/arrow-right.svg';
import assingIcon from '../assets/assign-icon.svg';

import { User } from '../App';

interface Props {
  writer: User | null;
  onAssign: () => void;
  loading: boolean;
}

function ChatTextInput(props: Props) {
  const [isWriting, setIsWriting] = useState(false);
  const writer = props.writer;

  const handleAssingClick = () => {
    console.log('Asigna')
    props.onAssign()
  }

  return (
    <div className={`flex ${writer ? 'justify-end' : 'justify-between'} ${writer ? `hover:border-[#6B42EE] border-2  ${isWriting ? 'border-[#6B42EE]' : 'border-white'}` : ''} content-center bg-white relative px-4 rounded-xl w-full h-14 flex-wrap shadow-sm`}>
      {writer && (
        <input 
          className="absolute bg-transparent inset-0 px-4 py-3 outline-none" 
          type="text" 
          onFocus={() => setIsWriting(true)}
          onBlur={() => setIsWriting(false)}
        />
      )}
      {!writer && (
        <div 
          className={`${props.loading ? "border-[#6B42EE] border-[1px]" : ""} flex relative justify-between rounded-3xl px-3 py-1.5 bg-[#f6f6f4] border-[1px] border-transparent cursor-pointer hover:border-[#6B42EE] hover:border-[1px] overflow-hidden`}
          onClick={handleAssingClick}
        >
          <img className="mr-2" src={assingIcon} />
          <p className="font-medium text-base">Assign myself and reply</p>
          {props.loading && (
            <div className="absolute flex flex-wrap content-center justify-center inset-0 z-10 bg-[#f6f6f4] opacity-75">
              <p className="">Loading...</p>
            </div>
          )}
        </div>
      )}
        <div className="z-20 rounded-full flex justify-center content-center w-8 h-8 bg-[#f6f6f4] border-[1px] border-transparent hover:border-[#6B42EE] hover:border-[1px] cursor-pointer">
            <img src={rightArrowIcon} className="w-[20px]" />
        </div>
    </div>
  )
}

export default ChatTextInput