import User from "../models/user.model.js";

export const getUsersForSidebar=async(req, res) => {
    try{
        const loggedInUserId=req.user._id;

        const filteredUsers=await User.find({_id: {$ne: loggedInUserId} }).select("-password");
        //all users will be shown except the one that is logged in currently
        //their password should not show

        res.status(200).json(filteredUsers);
    }

    catch(error){
        console.error("Error in getting users for sidebars: ", error.message);
        res.status(500).json({error: "Internal Server Error!"});
    }
}