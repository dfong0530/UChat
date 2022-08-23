import "./CSS/Login.css";
import { Link } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";
import GlobalContext from "../GlobalContext";
import SmsIcon from "@mui/icons-material/Sms";
import { LoginRequest, GetRoomData } from "../Data/GetData";

const Login = () => {
  const { setRoom, setUser, navigate } = useContext(GlobalContext);

  const [form, setForm] = useState({ username: "", password: "" });
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await LoginRequest(form);
      let roomData = { roomID: "", room: "", messages: [] };
      console.log(data);
      if (data.User.rooms.length !== 0) {
        roomData = await GetRoomData(
          data.User.rooms[0].roomID,
          data.User.username,
          data.User.password
        );
      }
      setRoom(roomData);

      ////id, username, password, rooms
      setUser({
        _id: data.User._id,
        username: data.User.username,
        password: data.User.password,
        name: data.User.name,
        location: data.User.location,
        inUkraine: data.User.inUkraine,
        friends: data.User.rooms,
      });
      navigate("/messages");
    } catch (e) {
      console.log(e);
      //if not valid
      setForm({ username: "", password: "" });
      usernameRef.current.focus();
    }
  };

  return (
    <>
      <section className="login-page">
        <SmsIcon
          className="logo"
          sx={{
            fontSize: 120,
            "@media (max-width: 1000px)": { fontSize: 108 },
            "@media (max-width: 800px)": { fontSize: 96 },
            "@media (max-width: 600px)": { fontSize: 80 },
            "@media (max-width: 425px)": { fontSize: 72 },
          }}
        />

        <p className="title">UChat</p>

        <form className="info" onSubmit={handleSubmit}>
          <input
            className="name"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
            ref={usernameRef}
          />

          <input
            type="password"
            className="pass"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="login-button">Login</button>
        </form>

        <p className="create-account">
          or
          <Link className="create-account-link" to="/create-account">
            create an account
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
