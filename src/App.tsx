import { useState } from 'react';
import './App.css';
import ChatTextInput from './components/ChatTextInput';

export interface User {
  name: string,
  photo: string
}

const dummiUser: User = {
  name: "Juliana",
  photo: "https://s3-alpha-sig.figma.com/img/dc43/b407/978aff670ff4902adb81a3ec058e1730?Expires=1687737600&Signature=W2ODZx0vKMB1cYZdulLA3ok2s4twbHyMDN5~xrlr4so9ZGdWvXvXKoJ1XAMvVByF5IVNYABUUKLiHwsCGogXVuF~kmEhi48qHUxTXJ0rBaQGS93z22TqR7j7d5oYa45HywDcSFx6eFgpD52S~JCSrGWEsCn~WLPCcmE252xshYrU8PxFNY3UPtU6L1tRgbiu2xL7JVAEUIfiDcdrFSYOjhm9mJq2fmdtvxfO3hR7KW0gt~dFHbLs2WXMYOIIe~P8V2-xvuR1PWuiLFaVM8sB2C2AtoEUVwvLBZTVyXiZ7E-ecv9DOybKji2YZN9yUzalDEcki0R9YXkukug-lKmNXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}

function App() {
  const [assigned, setAssigned] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState('');

  const handleUserAssignment = () => {
    setLoading(true);
    setTimeout(() => {
      setAssigned(dummiUser);
      setLoading(false);
    }, 1000) 
  }

  const handleTextSubmit = (newText: string) => {
    setText(newText)
  }
  
  return (
    <>
      <div className="max-w-[648px] md:w-full lg:w-full mx-auto my-0">
        <ChatTextInput 
          onAssign={handleUserAssignment}
          writer={assigned}
          loading={loading}
          onSubmit={handleTextSubmit}
          value={text}
          name="chat-answer"
          id="chat-answer"
        />

      </div>
      <div className="pt-10">
        <p><strong>value: </strong>{text}</p>
      </div>
    </>
  )
}

export default App
