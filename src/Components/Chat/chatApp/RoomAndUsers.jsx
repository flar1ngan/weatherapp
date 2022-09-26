import "./chatApp.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomAndUsers = ({ socket, username, room, chatname, btnContent }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    socket.on("chatroom_users", (data) => {
      console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off("chatroom_users");
  }, [socket]);

  const leaveRoom = () => {
    const __createdtime__ = Date.now();
    socket.emit("leave_room", { chatname, room, __createdtime__ });
    navigate("/", { replace: true });
  };


  return (
    <div className="roomAndUsersColumn">
      <h2 className="roomTitle">{room}</h2>

      <div>
        {roomUsers.length > 0 && <h5 className="usersTitle">Here:</h5>}
        <ul className="usersList">
          {roomUsers.map((user) => (
            <li
              style={{
                fontWeight: `${user.chatname === chatname ? "bold" : "normal"}`,
              }}
              key={user.id}
            >
              {user.chatname}
            </li>
          ))}
        </ul>
      </div>
      <div className="btnRoom">
        <button className="btnApp" onClick={leaveRoom}>
          {btnContent}
        </button>

      </div>
    </div>

  );
};

export default RoomAndUsers;
