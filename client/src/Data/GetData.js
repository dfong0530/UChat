import axios from 'axios'; 

//city, country --> Given lat, lng
export const GetLocation = async(lat, lng) => {
    //Made request to heroku backend because we didn't want to expose our google maps API key in the backend.
    const ret = await axios.get(`https://u-chat-backend.herokuapp.com/api/v1/maps/get-location?lat=${lat}&lng=${lng}`);
    const data = await ret.data;

    return data;
}



export const LoginRequest = async(auth) => {
    try{
        const res = await axios.post('http://localhost:5000/api/v1/auth/login', {
            username: auth.username,
            password: auth.password
        });
        const data = await res.data;
        return data;
    }
    catch(e){
        console.log(e);
        return e.response.data;
    }
}


export const CreateAccountRequest = async(auth) => {
    try{
        const res = await axios.post('http://localhost:5000/api/v1/auth/create-account', {
            username: auth.username,
            password: auth.password,
            location: auth.location,
            name: auth.name,
            inUkraine: auth.inUkraine
        });

        const data = await res.data;
        return data;
    }
    catch(e){
        console.log(e);
        return e.response.data;
    }
}
// when you swtich users
export const GetRoomData = async(roomID, username, password) => {
        try{

            const URL = `http://localhost:5000/api/v1/rooms/${roomID}`;

            const ret = await axios.get(URL, {
                headers: {
                    username,
                    password
                }
            });
            const room = await ret.data;

            if(room.status !== 200){
                throw room.status;
            }
            
            return {roomID, room: room.data.roomNum, messages: room.data.messages, userTwo: room.data.userTwo};
    }
    catch(e){
        console.log(e);
        throw e;
    }
}