import { userModel } from "../models/users.model.js";

export const login = async (req, res) => {
    try {
        let user = req.body;
        let {username} = user;
        let newUser = await userModel.create({username});
        newUser = newUser.toJSON();
        return res.send({
            error:false,
            message: 'User successfully logged in!',
            data: newUser
        })
    } catch (error) {
        return res.status(400).send(error);
    }
}

