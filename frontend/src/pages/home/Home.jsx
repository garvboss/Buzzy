import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import MessageContainer from '../../components/messages/MessageContainer.jsx';
import useConversation from '../../zustandStore/useConversation.js';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMessageContainer, setShowMessageContainer] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (selectedConversation && isMobile) {
      // console.log("hello show container")
      setShowMessageContainer(true);
    }
  }, [selectedConversation, isMobile]);

  const handleBackClick = () => {
    setShowMessageContainer(false);
    setSelectedConversation(null);
  };


  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      {isMobile ? (
        showMessageContainer ? (
          <MessageContainer onBackClick={handleBackClick} />
        ) : (
          <Sidebar />
        )
      ) : (
        <>
          <Sidebar />
          <MessageContainer />
        </>
      )}
    </div>
  );
};


export default Home
