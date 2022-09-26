import "./chatHome.css";
import { useNavigate } from "react-router-dom";

const ChatHome = ({ username, setUsername, room, setRoom, socket, chatname }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", { chatname, room });
      navigate('/chatapp', { replace: true });
    }

  };

  return (
    <div className="container">
      <div className="formContainer">
      <div className="content">
        <h1>{`CHAT`}</h1>

        <select
          className="input"
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>Select Room</option>
          <option value="latvia">Latvia</option>
          <option value="lithuania">Lithuania</option>
          <option value="estonia">Estonia</option>
        </select>

        <button
          className="btnJoin"
          onClick={joinRoom}
        >
          <span className="btnSpan">Join</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default ChatHome;
