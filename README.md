# WhatsApp-Mini

Introduction
This is a WhatsApp clone application that allows users to sign in using their Google credentials and chat with other users in real-time using Socket.io. The project is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and utilizes various technologies such as Material-UI, and Axios.

Installation
To install and run the project, follow these steps:

Clone the repository to your local machine
Navigate to the project directory in your terminal
Run the command npm install to install the required dependencies for the server
Navigate to the client directory using cd client
Run the command npm install to install the required dependencies for the client
Go back to the project directory using cd ..
Create a .env file in the project directory and add the following environment variables:
MONGO_URI - The connection string for your MongoDB Atlas database
GOOGLE_CLIENT_ID - The Client ID for your Google OAuth 2.0 credentials
GOOGLE_CLIENT_SECRET - The Client Secret for your Google OAuth 2.0 credentials
GOOGLE_CALLBACK_URL - The Callback URL for your Google OAuth 2.0 credentials
JWT_SECRET - A secret key for JSON Web Token (JWT) encryption
Run the command npm run dev to start the development server and client
Usage
Once the development server and client are running, open your web browser and navigate to http://localhost:3000. You will be redirected to the Google authentication page where you can sign in using your Google credentials. After authentication, you will be redirected back to the chat application where you can create a new chat room or join an existing one. You can then send messages to other users in real-time.

Contributing
Contributions are always welcome! If you want to contribute to this project, please submit a pull request.

License
This project is licensed under the MIT license. See the LICENSE file for more information.
