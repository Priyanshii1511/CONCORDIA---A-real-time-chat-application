import express from "express"; //package imports
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"; //file imports
import messageRoutes from "./routes/message.routes.js"; 
import userRoutes from "./routes/user.routes.js";
 
import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express(); //variables
const PORT=process.env.PORT || 5000;

dotenv.config(); 

//middlewares
app.use(express.json()); //to parse the incoming requests with JSON payloads
app.use(cookieParser());//before running routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res)=>{
       //root route is http://localhost:5000
//     res.send("Hello World!");
// });

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});