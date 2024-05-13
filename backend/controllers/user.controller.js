import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password") // all users in database except self

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("error in getUsersForSidebar ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}