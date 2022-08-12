import './App.css';
import Message from './Pages/Messages.js'
import Initial from "./Pages/Initial";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import {useState} from "react";
import GlobalContext from './GlobalContext';
import {Routes, Route, useNavigate} from "react-router"

function App() {

  //navigate("/messages")
  const navigate = useNavigate(); 
  //{_id, username, password, friends: [{ roomID: string, friendUsername: string}]}
  const [user, setUser] = useState(null); 
  //{roomID: str, room: str, messages: [{_id: str, userID, message: string, 
  // donation: bool, donationAmount: int}]}
  const [room, setRoom] = useState({roomID: "", room: "", messages: []}); 


  return (
    <>
      <GlobalContext.Provider value={{navigate, user, setUser,room, setRoom}}>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/messages" element={<Message />} />
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
