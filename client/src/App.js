import './App.css';
import Messages from './Pages/Messages.js'
import Initial from "./Pages/Initial";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import {useState} from "react";
import GlobalContext from './GlobalContext';
import {Routes, Route, useNavigate} from "react-router"


function App() {

  //navigate("/messages")
  const navigate = useNavigate(); 
  //{_id, username, password, name, location, inUkraine, friends: [{ roomID: string, name: string, location: string}]}
<<<<<<< HEAD
  const [user, setUser] = useState({_id: '', username: '', password: '', name: '', friends: []}); 
=======
  const [user, setUser] = useState({_id: '', username: '', password: '', location: '', name: '', friends: []}); 
>>>>>>> 27c23b80e6301a53bfafdb1fcc9412ce8e82b304
  //{roomID: str, room: str, messages: [{_id: str, userID, message: string, donation: 
  // bool, donationAmount: int}]}
  const [room, setRoom] = useState({roomID: "", room: "", messages: []}); 


  return (
    <>
      <GlobalContext.Provider value={{navigate, user, setUser,room, setRoom}}>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </GlobalContext.Provider>
    </>
    
  );
}

export default App;
