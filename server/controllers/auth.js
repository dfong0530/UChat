const Auth = require('../models/auth');

const Login = async(req, res) => {
    const { username, password } = req.body;

    try{
        const User = await Auth.findOne({username, password});

        if(!User){
            return res.status(404).json({ status: 404, User: null });
        }

        User.rooms = User.rooms.reverse();

        res.status(200).json({ status: 200, User })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({ status: 500, User: null });
    }
}

const CreateAccount = async (req, res) => {

    const { username, password, name, location, inUkraine } = req.body;

    try{
        const UserExists = await Auth.findOne({ username, password });
        
        if(UserExists){
            return res.status(409).json({status: 409, User: null});
        }

        const User = await Auth.create({ username, password, name, location, inUkraine });
        return res.status(200).json({ status: 200, User });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({ status: 500, User: null })
    }
}

const AddRoomToUser = async(userId, roomID, name) => {

    const append = {roomID, name};

    try{
        await Auth.findOneAndUpdate({_id: userId}, {"$push": {rooms: append}}, {
            new: true
        });
        return { completed: true };
    }
    catch(e){
        console.log(e);
        return { completed: false }
    }   
}

const UpdateFriend = async(userID, roomID, name) => {
    try{
        let User = await Auth.findOne({_id: userID});

        User.rooms.map(room => {
            if(room.roomID === roomID){
               room.name = name;
            }
            return room;
        });

        await Auth.findOneAndUpdate({_id: userID}, {rooms: User.rooms});
        return {completed: true}
    }
    catch(e){
        console.log(e);
        return {completed: false}
    }
}

const Validate = async(username, password, roomID) => {
    try{
        const User = await Auth.findOne({username, password});

        if(!User){
            return false;
        }

        User.rooms.filter(room => room.roomID === roomID);
        return User.rooms.length !== 0;
    }
    catch(e){
        console.log(e);
        return false;
    }
}

module.exports = {
    Login,
    CreateAccount,
    AddRoomToUser,
    UpdateFriend,
    Validate
}