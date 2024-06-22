import { useEffect, useRef } from 'react'
import Message from './Message.jsx';
import useGetMessages from '../../hooks/useGetMessages.js';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const {loading, messages} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200)
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto pb-2'>
      {!loading &&
       messages.length > 0 &&
       messages.map((message) => (
        <div key={message._id} ref={lastMessageRef} >
          <Message  message={message} />
        </div>
        ))
      }

      {loading && <div className="flex justify-center">
         <span className="loading loading-spinner"></span>
        </div>
      }

      {!loading && messages.length===0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
