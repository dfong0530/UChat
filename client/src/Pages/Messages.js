import "./CSS/Messages.css";
import addIcon from "./images/add-friend-icon.jpg";

const Messages = () => {
    return (
        <> 
            <section className='page'>
                <div className='side'>
                    <div className='add'>
                        <p>
                            UChat
                        </p>
                        
                        <img src={addIcon} />
                        
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