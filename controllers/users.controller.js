import { userModel } from "../models/users.model.js";

// Login User
export const login = async (req, res) => {
    try {
        let username = req.body;
        let newUser = await userModel.create(username);
        newUser = newUser.toJSON();
        return res.send({
            error:false,
            message: 'User successfully logged in!',
            data: newUser
        })
    } catch (error) {
        return res.status(500).send("Please anter alphanunmric username only!");
    }
}

