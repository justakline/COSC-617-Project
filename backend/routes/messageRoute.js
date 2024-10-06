import { getMessages, getMessagesByUserName } from "../controllers/messageController.js";
import express from 'express';
const router = express.Router();

// express router method to create route for getting all users
router.route('/').get(getMessages);

// express router method to create route for getting users by id
router.route('/:originUserName').get(getMessagesByUserName);

export default router