//defining logics
import User from '../model/userModel.js'

export const create = async (req, res) => {
    try{
        const userData = new User(req.body);
        const { email } = userData;

        const userExist = await User.findOne({ email });

        if(userExist) {
            return res.status(400).json({message: 'User already exists. Please login.'});
        }
        const savedUser = await userData.save();
        return res.status(200).json({message: 'Saved successfully'});
        
    }catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
};


export const fetch = async (req, res)=> {
    try {
        const user = await User.find();
        if(user.length === 0){
            return res.status(404).json({message: 'No users found'});
        }
        return res.status(200).json(user)
    }catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
};

export const update = async (req, res) => {
    try{
        const userId = req.params.id;
        const userExist = await User.findById({_id:userId});
        if(!userExist) {
            return res.status(404).json({message: 'User not found!'});
        }
        const updateUser = await User.findByIdAndUpdate(userId, req.body, {
            new:true,
        });
        res.status(201).json(updateUser);
        
    }catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userExist = await User.findById({ _id: userId});
        if (!userExist) {
            return res.status(404).json({message: 'User not found'});
        }
        const response = await User.findByIdAndDelete(userId);
        res.status(201).json({message: 'User deleted successfully', response});

    } catch (error) {
        return res.status(500).json({Message: 'Internal server error', error});
    }
};