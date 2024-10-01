import React from 'react';
import Draggable from 'react-draggable';
import ChatWindow from './ChatWindow';
import { useEffect, useRef, useState } from 'react';

function DraggableChat() {

  const [bounds, setBounds] = useState({ top: 0, left: 0, right: 0, bottom: 0 });
  const [appElement,setAppElement] = useState(null)
  const [windowElement,setWindowElement] = useState(null)
  const chatWindowRef = useRef(null)

// Updates the bounds so that each draggable chat does not go beyond the bounds
  const updateBounds = () =>{
    const appElement = document.getElementById('root');
    // this gets the size of the chat window so that we can adjust... the position of all elements are the left-top corner, so if
    // We moved the Draggablechat, we would be able to move it beyond the bounds of the viewport unless we have the following code
    const windowElement = document.querySelector('.chat-window');
    if (appElement && windowElement) {

      const rect = appElement.getBoundingClientRect();
      const windowSize = windowElement.getBoundingClientRect()

      setBounds({
        top: 0,
        left: 0,
        right: rect.width - windowSize.width,  
        bottom: rect.height - windowSize.height, 
      });


    } else {
      console.log('appElement not found');
    }

  }

  // This allows us to set the and re render everytime the window changes szie 
  useEffect(() => {
   // Calculate initial bounds
   updateBounds();

   // Add window resize event listener
   window.addEventListener('resize', updateBounds);

   // Use ResizeObserver to track changes to .chat-window size
   const windowElement = chatWindowRef.current;
   if (windowElement) {
    console.log('Creating ResizeObserver for .chat-window');
     const resizeObserver = new ResizeObserver(() => {
       console.log('ResizeObserver triggered for .chat-window');
       updateBounds(); // Update bounds when .chat-window size changes
     });

     resizeObserver.observe(windowElement); // Start observing the chat window

     // Cleanup observer and window resize event listener
     return () => {
       resizeObserver.disconnect();
       window.removeEventListener('resize', updateBounds);
     };
   }else{
    console.log('.chat-window not found for ResizeObserver');
   }
 }, []);




  return (

    <Draggable handle=".chat-header" bounds={bounds} >
      <div className="draggable-chat" style={{ width:0, height: 0}}>
        <div  ref={chatWindowRef}>
        <ChatWindow />
        </div>
      </div>
    </Draggable>

  );
}

export default DraggableChat;