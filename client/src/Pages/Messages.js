import "./CSS/Messages.css";
import {useEffect, useContext} from "react"
import GlobalContext from "../GlobalContext";
import io from 'socket.io-client';


const socket = io();

const Messages = () => {

    useEffect(() => {
        /* This is where I will adding socket event listeners. 

            ALL you need to know is that these even listeners will help me send data from the backend to
            the frontend. Once the data is retrieved on the front end state variables will be updated
            accordingly 
        */


    })

    return (
        <> 
            <section className='page'>
                <div className='side'>
                    <div className='add'>
                        <p>
                            UChat
                        </p>

                        
                    </div>

                    <div className='friends'>

                    </div>
                </div>

                <div className='main'>
                    
                </div>
            </section>
        </>
    );
}

export default Messages;