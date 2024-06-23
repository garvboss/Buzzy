import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import { TiMessages } from 'react-icons/ti';
import { FaArrowLeft } from 'react-icons/fa';

import useConversation from '../../zustandStore/useConversation.js';
import { useAuthContext } from '../../context/Authcontext.jsx';

const MessageContainer = ({ onBackClick }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // useEffect(() => {
  //   // Clean up function (unmounts)
  //   return () => setSelectedConversation(null);
  // }, [setSelectedConversation]);

  if (!selectedConversation) {
    return <NoChatSelected />;
  }

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
        {onBackClick && (
          <button className="p-2 mr-2" onClick={onBackClick}>
            <FaArrowLeft />
          </button>
        )}
        <span className="label-text font-bold">To: </span>
        <span className="text-gray-900 font-bold ml-1">
          {selectedConversation.fullName}
        </span>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName} ⭐</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
