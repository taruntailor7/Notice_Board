import { userModel } from "../models/users.model.js";

// Login User
export const login = async (req, res) => {
    try {
        let username = req.body;

        const regEx = /^[0-9a-zA-Z]+$/;

        if(username.match(regEx)){
            let newUser = await userModel.create({username});
            newUser = newUser.toJSON();
            return res.send({
                error:false,
                message: 'User successfully logged in!',
                data: newUser
            })
        } else{
            return res.send({
                error:true,
                message: 'Please enter alphanumeric username only!'
            })
        }
    } catch (error) {
        return res.status(500).send({
            message: "Something went wrong!"
        });
    }
}


