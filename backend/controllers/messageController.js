import Message from '../models/messageModel.js'
import asyncHandler from 'express-async-handler'

//getMessages function to get all messages
export const getMessages = asyncHandler(async(req, res) => {
    const messages = await Message.find({});
    res.status(200).json(messages);
})

//getMessagesByUserName function to retrieve messages by originUserName
export const getMessagesByUserName  = asyncHandler(async(req, res) => {
    const messages = await Message.find({ originUserName: req.params.originUserName });

    //if username match param id send messages else throw error
    if(messages){
        res.status(200).json(messages);
    }else{
        res.status(404).json({message: "User not found"});
        res.status(404);
        throw new Error('User not found');
    }
})