# AP2---ex3

The project in advanced programming2.

## Table of Contents
* [General Info](#Chat-Site-SpeakEasy)
* [Login Screen](#Login-Screen)
* [Registration Screen](#Registration-Screen)
* [Chat Screen](#Chat-Screen)
* [Features](#Features)
* [Future Development](#Future-Development)
* [Technologies Used](#Technologies-Used)
* [Getting Started](#Getting-Started)

# Chat Site - SpeakEasy
This project is a web UI for a chat site. It allows users to register, log in, and chat with other users on the platform. The project includes three screens: a registration screen, a login screen, and a chat screen.

# Login Screen
The login screen is the main page of the website. Users can enter their username and password to log in or click a link to go to the registration screen. If the user enters the correct credentials, they will be taken to the chat screen. If the user enters incorrect credentials, they will see an error message.

Screenshot: 

<img width="875" alt="image" src="https://user-images.githubusercontent.com/117304079/234653942-7161023a-cfcf-48bd-bc03-02bcc2edc3b5.png">

# Registration Screen

**important:** 

**According to the instructions of the exercise, during the registration you can upload as a profile picture only pictures of small size. Uploading images that are too large will result in the registration failure (failed to fetch).**

The registration screen allows users to create a new account by entering their username, password, display name, and picture. A password verification field is also included to ensure that the user enters their password correctly. The registration screen has a similar design to the login screen, with a form for entering user details.

![sign1](https://github.com/EliTotah/AP2--ex1.2/assets/117304079/e6828c8b-8d30-4923-93f8-e40cb25eeeb3)

![sign2](https://github.com/EliTotah/AP2--ex1.2/assets/117304079/343470ad-8fba-4ea4-8058-b6a288eb02e0)

Validation
The registration and login screens have input field validation to ensure that all fields are filled out and the entered values are allowed. Passwords must be at least 8 characters long and a combination of characters and letters. Clear visual indications and messages are displayed to the user to guide them in entering the correct values.

Image and Password Verification
The logic for the image and password verification on the registration screen works correctly. The user can select an existing image from their computer and the password verification ensures that the entered password meets the required criteria.

# Chat Screen
The chat screen is divided into two parts. The left part shows a list of chats with other users. For each chat, the user's picture, nickname, and last message received (along with the date/time it was received) are displayed. The right part of the screen shows the messages for the selected chat. Users can type messages and send them to the other user in the chat. Messages are displayed in real-time, so users can have a seamless conversation.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/117304079/235350894-234792f8-8577-4fe3-bca2-4496a042f585.png">

The chat app allows users to add new contacts, which appear in the "in conversations" section on the left part of the screen. Clicking on a conversation from the left part opens the correspondence with that contact on the right part of the screen. The right part of the screen allows users to write and send messages, which appear in the correspondence screen with the corresponding contact and are saved in JavaScript.

# Features
* User registration
* User login
* Chatting with other users
* Real-time message updates
* Responsive design for Desktop devices

# API Explanation
The server exposes a RESTful API that operates relative to the current logged-in user, identified by a token. The following endpoints are part of the API:

http://localhost:5000/api/Chats: The address for accessing user chats.

* The GET operation retrieves all chats of the current user.

* The POST operation creates a new chat with the specified contact.

http://localhost:5000/api/Tokens: The address for generating a JWT (JSON Web Token) for the registered user.

* The POST operation creates a JWT for the user registered in the system.

http://localhost:5000/api/Users: The address for creating a new user.

* The POST operation creates a new user.

http://localhost:5000/api/Users/:id: The address for retrieving user details by identifier.

* The GET operation gives the details of the user with the specified identifier.

# Technologies Used
The project was created using HTML and CSS. The UI is designed to be simple and user-friendly. The website is fully responsive and works on desktop devices.

# Getting Started
cd Server

npm start

go to http://localhost:5000/

# Author
This project was created by [_@Ofirroth_](https://github.com/Ofirroth) and [_@EliTotah_](https://github.com/EliTotah).
feel free to contact us.


