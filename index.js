// Importing required modules
const express = require('express');
const cors = require('cors');
const http = require('http');
const cron = require('node-cron');
const { Server } = require("socket.io");
const { connectDatabase, mongooseInstance } = require('./db.config');

// Importing custom modules

// const authRouter = require('./src/routes/Auth/auth');
// const otpRouter = require('./src/routes/OTP/index');
// const userRouter = require('./src/routes/UserData/user');
// const communityRouter = require('./src/routes/Community/index');
// const chatRouter = require('./src/routes/Chat/index');

// const { checkInactiveUsers } = require('./src/middlewares/inactiveUser');


const User = require('./src/modules/User/user');

// Constants
const port = 8080;

// Creating express app
const app = express();

// Enabling CORS
app.use(cors());

// Serving static files
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Creating HTTP server
const server = http.createServer(app);

// Setting up sockets


// Schedule cron job to run at 3am everyday
cron.schedule('0 3 * * *', () => {
  checkInactiveUsers();
}, {
  timezone: 'Asia/Kolkata' // India timezone
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Middleware
// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);
// app.use("/api/otp", otpRouter);
// app.use("/api/chat", chatRouter);
// app.use("/api/community", communityRouter);
// Starting the server after connecting to the database
connectDatabase()
  .then(async () => {

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });