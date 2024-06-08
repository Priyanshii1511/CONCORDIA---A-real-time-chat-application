import jwt from "jsonwebtoken";

//creating token
const generateTokenAndSetCookie=(userId, res) => { 
    const token=jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "15d"
    })

    //set cookie
    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, //in ms
        httpOnly: true, //to prevent XSS attacks
        sameSite: "strict", //to prevent CSRF attacks
        secure: process.env.NODE_ENV != "development" //false in development
        //true if in  production
    })
}

export default generateTokenAndSetCookie;