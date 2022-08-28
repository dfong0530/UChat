# Frontend Architecture

<img width="800" alt="Screen Shot 2022-08-18 at 12 47 10 AM" src="https://user-images.githubusercontent.com/68403991/185296033-635606b4-d84c-458c-be08-59b64e797145.png">

## Landing Page

###### Actions: Login button, Sign Up button

Login button - When this button is clicked, the user will be redirected to the login page.

Sign Up button - When this button is clicked, the user will be redirected to
the create account page.

## Login Page

###### Actions: Login, Create Account

Create Account - When link clicked, user redirected to the create account page.

Login - If user's credentials are corrrect --> HTTP Request to GetUserData and GetFirstRoomData --> Update state variables --> redirect to the messages page.

## Create Account Page

###### Actions:

## Messages Page

###### Actions: Add Friend button, Switch Friend, Donate Button, Message Input

Add Friend button: When this is clicked, the user adds a friend and at first, the friend will appear anonymous since the other user has to add a friend
and the messages will be switched to the room with the new friend automatically 

Switch Friend: Whenever the user clicks on another friend, they will be able to switch to the messages page for that friend 

Donate Button: When this is clicked, the user will be able to specify an amount and a message which will be displayed on the chatting area

Message Input: When the user inputs a message, it will be displayed in the chat and added to the array of messages for the specify roomID with that friend 
and the userID.
