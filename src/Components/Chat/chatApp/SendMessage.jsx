import "./chatApp.css";
import React, { useState } from 'react';

const SendMessage = ({ socket, username, room, chatname, btnContent }) => {
  const [message, setMessage] = useState('');


  const sendMessage = () => {
    if (message !== '') {
      const __createdtime__ = Date.now();
      socket.emit('send_message', { chatname, room, message, __createdtime__ });
      setMessage('');
    }
  };

  return (
    <div className="sendMessageContainer">
      <input
        className="messageInput"
        placeholder='Message...'
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="btnApp" onClick={sendMessage}>
      {btnContent}
      </button>
    </div>
  );
};

export default SendMessage;