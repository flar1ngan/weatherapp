import "./chatApp.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import RoomAndUsers from "./RoomAndUsers";

const ChatApp = ({ username, room, socket, chatname }) => {
  console.log(username);
  return (
    <div className="mainContainer">
      <div className="chatContainer">
        <RoomAndUsers socket={socket} username={username} room={room} chatname={chatname} btnContent={'LEAVE'}/>
        <div>
          <Messages socket={socket} />

          <SendMessage socket={socket} username={username} room={room} chatname={chatname} btnContent={'SEND'}/>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
