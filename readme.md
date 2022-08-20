# UChat - a Ukrainian support chat application

https://user-images.githubusercontent.com/68403991/185759497-8fe9bf8b-9027-4282-86d1-ca8bbae83e98.mov

### <pre>  [Demo Video](https://www.google.com/)     [Project Link](https://www.google.com/)     [Frontend Architecture](https://github.com/dfong0530/UChat/tree/main/client)     [Backend Architecture](https://github.com/dfong0530/UChat/tree/main/server)</pre>

###### Frontend Developers: David Fong, Justin Tran, Veevek Dave, Tashi Sherpa

###### Backend Developers: David Fong

### Inspiration

On Thursday, Febuary 22, 2022, Russia invaded Ukraine. The invasion wreaked havoc on the civilians and many lost their homes, lives, and loved ones. Depsite the invasion, Ukraine has not lost hope and continues fighting.

This project was created in support on Ukraine. We wanted to create an application where the rest of the world could reach out and provide support to people directly within Ukraine. This chat application application allows users in Ukraine to communicate with the rest of the world and the rest of the world to communicate with Ukraine.

This software connects those who need support and those who are generous enough to provide it.

### What is does

Our chat application allows the rest of the world to communicate with people in Ukraine. When a user is loaded in, they create an account specifying their username, password, and location (through the navigator.geolocation function and google maps api).

The user is then directed to the chat application where they have options to add friends and chat with people in Ukraine or the rest of the world depending on where they reside.

Users outside of Ukraine have options to donate to the person they are speaking with.

---

### Contribution

#### David Fong

    I was the project lead. I worked on building out the backend, designing the architecture of
    the frontend, and assisted my teamates wherever needed.

    I learned a lot about various backend technologies like socket.io, node.js, and express, mongoDB.

#### Justin Tran

    I worked on building the frontend portion of the project for the login and messaging page using
    React Javascript, HTML and CSS. I also worked on integrating the functionality from the backend to reflect
    it on the frontend by updating the views and incorporating interactive UIs for the user.

    Overall, I developed my understanding of React JS and reinforced my skills for HTML and CSS.

#### Veevek Dave

#### Tashi Sherpa

    I worked on building the frontend portion of the project for the landing page and the donation 
    functionality on the messaging page through the use of React.js, HTML, CSS, and Javascript.

    To do this, I adjusted multiple media queries for 
---

### How to test

1. Clone the project and open both start both servers -or- click the project link

2. Open up two instances of the website

3. Sign in with --> username: david, password: davidpassword

4. Sign in with --> username: gabby, password: gabbypassword

5. Click the add friend icon on both sites.

6. Message each other

Gabby is located in "Ukraine" and David is located in "New York". In order for users to be connected one of the them has to be in Ukraine and one outside of Ukraine.

### Tech Stack (MERN)

We used Mongodb, Express, React, and Node.js to build out this application. We also used socket.io for messaging between users.

### Installation

1. git clone

2. Open two instances of terminal/command prompt

3. cd UChat

###### FrontEnd

- cd client
- npm install
- npm start

###### BackEnd

- cd server
- npm install
- npm start
