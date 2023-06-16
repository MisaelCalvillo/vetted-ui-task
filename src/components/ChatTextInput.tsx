import { useState, KeyboardEvent } from 'react';
import rightArrowIcon from '../assets/arrow-right.svg';
import assingIcon from '../assets/assign-icon.svg';

import { User } from '../App';

import Spinner from './Spinner';
import Avatar from './Avatar';

type ChatTextInput = {
  writer: User | null;
  onAssign: () => void;
  onSubmit: (text: string) => void
  loading: boolean;
  value?: string;
  name?: string;
  id?: string;
}

// TODO: Extend color palete

function ChatTextInput({ 
  writer, 
  onAssign, 
  onSubmit, 
  loading, 
  value, 
  id, 
  name,
}: ChatTextInput) {
  const [isWriting, setIsWriting] = useState(false);
  const [text, setText] = useState<string | undefined>(value);

  const handleAssingClick = () => {
    onAssign();
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement> ) => {
    if (e.key === 'Enter' && text) {
      onSubmit(text);
      setText('');
    }
  };

  const onSubmitHandler = () => {
    if(text) {
      onSubmit(text);
      setText('');
    }
  }

  // When to show the component
  let showWriterInfo = !isWriting || !text;

  // Hide component when there's text on the input
  if (!isWriting && text) {
    showWriterInfo = false
  } 

  const showBorder = isWriting;

  return (
    <div className={`${!showWriterInfo ? 'justify-end' : 'justify-between'} ${writer && `hover:border-[#6B42EE]`} ${showBorder ? 'border-[#6B42EE]' : 'border-white'} flex border-2 content-center bg-white relative px-4 rounded-xl w-full h-14 flex-wrap shadow-sm min-w-[320px]`}>
      {writer && (
        <input 
          className={`absolute bg-transparent inset-0 px-4 py-3 outline-none z-50 font-medium text-base leading-none pr-[10%]`} 
          type="text" 
          onFocus={() => setIsWriting(true)}
          onBlur={() => setIsWriting(false)}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          name={name}
          id={id}
        />
      )}
      {showWriterInfo && (
        <div className={`flex justify-between content-center flex-wrap`}>
          {writer && (
            <div className={`flex flex-wrap relative justify-between content-center h-8 bg-transparent mr-1.5  ${writer && 'opacity-20'}`}>
              <p className="font-medium text-base leading-none">Replying as</p>
            </div>
          )}
          <div 
            className={`flex flex-wrap relative justify-between content-center h-8 rounded-3xl ${writer ? 'pl-[5px] pr-[11px]' : 'px-3'} bg-[#f6f6f4] ${!loading ? 'hover:opacity-75': ''} border-transparent cursor-pointer overflow-hidden  ${writer && 'opacity-40'}`}
            onClick={handleAssingClick}
          >
            {writer ? <Avatar src={writer?.photo} /> : <img className="mr-2" src={assingIcon} />}
            <p className="font-medium text-base leading-normal">{writer?.name || 'Assign myself and reply'}</p>
            {loading && (
              <div className="absolute flex flex-wrap content-center justify-center inset-0 z-10 bg-[#f6f6f1] opacity-75">
                <Spinner active />
              </div>
            )}
          </div>
        </div>
      )}
        <button
          className="z-[60] rounded-full flex flex-wrap justify-center content-center w-8 h-8 bg-[#f6f6f4] cursor-pointer hover:shadow-sm active:shadow select-none"
          onClick={onSubmitHandler}
          value="submit"
        >
          <img src={rightArrowIcon} className="w-[20px]" />
        </button>
    </div>
  )
}

export default ChatTextInput