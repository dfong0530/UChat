# Backend Architecture

<img width="1000" alt="Screen Shot 2022-08-15 at 11 25 57 AM" src="https://user-images.githubusercontent.com/68403991/185294120-b49aa912-a512-44d3-a047-a75eba9f4468.png">

## Interfaces

#### HTTP Endpoints:

1. Login-

- curl --location --request POST 'http://localhost:5000/api/v1/auth/login' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "username": '${username}',
    "password": '${password}'
  }'

- This endpoint returns a status code and the data about the user if the credentials are found in the database.

2. Create Account-

- curl --location --request POST 'http://localhost:5000/api/v1/auth/create-account' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "username": '${username}',
    "password": '${password}',
  "location": '${location}',
    "name": '${name}',
  "inUkraine": ${booleanInUkraine}
  }'

- This endpoint returns a status representing if the user was added into the db.

3. GetRoom-

- curl --location --request GET 'http://localhost:5000/api/v1/rooms/${roomID}' \
  --header 'username: ${username}' \
  --header 'password: ${password}' \
  --data-raw ''

- This endpoint returns all data associated with a given room -->
  (\_id, roomNum, messages: [{_id, userID, message, donation: bool, donationAmount: int}]).

4. GetLocation-

- curl --location --request GET 'http://localhost:5000/api/v1/maps/get-location?lat=${lat}&lng=${lng}'

- This endpoint returns a {city, country} given the longitude and latitude. It makes a request to the google maps endpoint.

#### Socket.io event listeners

1. Event - Join Room, Parameters - {userID: string, name: string, inUkraine: bool, location: string}

   This event listener waits for the "join-room" event to be emitted on the frontend. This event listener handles the logic required to match users from Ukraine and the rest of the world, pair them together and update the rooms db and the users db.

2. Event - Switch Room, Parameters - room: string

   This event listener waits for the "switch-room" event to be emitted on the frontend. Once envoked, the server switches the socket room to the one specified by the frontend.

3. Event - Leave Room, Parameters - room: string

   This event listener waits for the "leave-room" event to be emitted on the frontend. Once envoked, the server leaves the socket room specified by the frontend.

4. Event - message, Parameters - { userID: string, roomID: string, message: string, roomNum: string, donation: bool, donationAmount: int }

   This event listener waits for the "message" event to be emitted on the frontend. It then adds the message object in the rooms db.

---

## Schemas

<img width="597" alt="Screen Shot 2022-08-18 at 4 46 54 PM" src="https://user-images.githubusercontent.com/68403991/185493652-cd4ccc32-c431-4c0d-af27-92937b3a9fc0.png">

## Middleware

Each of the schemas has a middleware file associated with it.

auth.js --> This middleware file contains functions for authentication, creating accounts, and updating the data in the friends list for each user.

join-room.js --> This middleware file contains one function that is responsible for pairing users from Ukraine and the rest of the world in distinct socket.io rooms, and updating the rooms db and the users db.

rooms.js --> This middleware file contains functions responsible for adding messages to room objects and updating data about users in a room.

## Queues

<img width="600" alt="Screen Shot 2022-08-18 at 6 30 57 PM" src="https://user-images.githubusercontent.com/68403991/185506566-15ea6430-11c6-4efa-9aba-b7ac2440e148.png">

The join-rooms db only contians two entries show in the image above. These entries act as queues for the users. When users want to be paired they are matched with another user in Ukraine or a user outside of Ukraine. When a match cannont be made the user is saved in a queue and remains there until a match is avaliable.
