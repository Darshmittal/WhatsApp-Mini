import express from 'express';

import {addUser,getUsers} from '../controller/user_controller.js'
import {newConversation,getConversation} from '../controller/conversation_controller.js'
import { newMessage,getMessages} from '../controller/message-controller.js';
import { uploadFiles,getImage } from '../controller/Image-controller.js';

import upload from '../utils/upload.js'
const route =express.Router();


route.post('/add', addUser);
route.get('/users',getUsers);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);

//passing middleware
route.post('/files/upload',upload.single("file"),uploadFiles);
route.get('/file/:filename',getImage);

export default route;