import express from "express";
import { app, server } from "./socket/socket.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT|| 5000

app.use(express.json()); // to parse incoming request with json payload (from req.body)
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send("Hello G");
// })

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port: ${PORT}`)
});