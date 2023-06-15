import { useState, KeyboardEvent } from 'react';
import rightArrowIcon from '../assets/arrow-right.svg';
import assingIcon from '../assets/assign-icon.svg';

import { User } from '../App';

interface Props {
  writer: User | null;
  onAssign: () => void;
  onSubmit: (text: string) => void
  loading: boolean;
  value?: string;
}



function ChatTextInput(props: Props) {
  const [isWriting, setIsWriting] = useState(false);
  const [text, setText] = useState<string | undefined>(props.value);

  const writer = props.writer;

  const handleAssingClick = () => {
    props.onAssign();
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement> ) => {
    if (e.key === 'Enter' && text) {
      props.onSubmit(text);
      setText('');
    }
  };

  const onSubmitHandler = () => {
    if(text) {
      props.onSubmit(text);
      setText('');
    }
  }

  console.log({ text })

  let showWriterInfo = !isWriting || !text;
  if (!isWriting && text) {
    showWriterInfo = false
  } 
  const showBorder = isWriting;

  return (
    <div className={`flex ${!showWriterInfo ? 'justify-end' : 'justify-between'} ${writer && `hover:border-[#6B42EE]`} ${showBorder ? 'border-[#6B42EE]' : 'border-white'} border-2 content-center bg-white relative px-4 rounded-xl w-full h-14 flex-wrap shadow-sm min-w-[320px]`}>
      {writer && (
        <input 
          className={`absolute bg-transparent inset-0 px-4 py-3 outline-none z-50 font-medium text-base leading-none pr-[10%]`} 
          type="text" 
          onFocus={() => setIsWriting(true)}
          onBlur={() => setIsWriting(false)}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
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
            className={`flex flex-wrap relative justify-between content-center h-8 rounded-3xl ${writer ? 'pl-[5px] pr-[11px]' : 'px-3'} bg-[#f6f6f4] ${!props.loading ? 'hover:opacity-75': ''} border-transparent cursor-pointer overflow-hidden  ${writer && 'opacity-40'}`}
            onClick={handleAssingClick}
          >
            {
              writer ? (
                <div 
                  className="w-6 h-6 bg-cover bg-no-repeat rounded-full bg-center mr-[7px]"
                  style={{
                    backgroundImage: `url(${writer.photo})`
                  }}
                ></div>
              ) : (
                <img className="mr-2" src={assingIcon} />
              )
            }
            <p className="font-medium text-base leading-normal">{writer?.name || 'Assign myself and reply'}</p>
            {props.loading && (
              <div className="absolute flex flex-wrap content-center justify-center inset-0 z-10 bg-[#f6f6f1] opacity-75">
                <svg aria-hidden="true" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
        <button
          className="z-[60] rounded-full flex flex-wrap justify-center content-center w-8 h-8 bg-[#f6f6f4] cursor-pointer hover:shadow-sm active:shadow select-none"
          onClick={onSubmitHandler}
        >
          <img src={rightArrowIcon} className="w-[20px]" />
        </button>
    </div>
  )
}

export default ChatTextInput