//defining user routes and mapping them to controller functions

import express from 'express'
import { fetch, create, update, deleteUser } from '../controller/userController.js'

const route = express.Router();

route.get('/fetch', fetch);
route.post('/create', create);
route.put('/update/:id', update);
route.delete('/delete/:id', deleteUser);

export default route;