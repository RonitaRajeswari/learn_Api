import express from 'express'
import { deleteContactById, getAllContact, getContactById, getContactByUserId, newContact, updateContactById } from '../controllers/contact.js'
import {isAuthenticated} from "../middlewares/Auth.js"

const router = express.Router();

//new contact

//@api dsc :- creating contact 
//@api method :- post
//@api endpoint :- /api/contact/new
router.post('/new',isAuthenticated, newContact)

//@api dsc :- get All contact 
//@api method :- get
//@api endpoint :- /api/contact/new
router.get('/', getAllContact)

//@api dsc :- get contact by Id
//@api method :- get
//@api endpoint :- /api/contact/new/id
router.get('/:id', getContactById)

//@api dsc :- update contact by Id
//@api endpoint :- /api/contact/new/id
router.put('/:id',isAuthenticated, updateContactById)

//@api dsc :- delete contact by Id
//@api endpoint :- /api/contact/new/id
router.delete('/:id',isAuthenticated, deleteContactById)

//@api dsc :- get contact by userId
//@api endpoint :- /api/contact/new/id
router.get('/userid/:id', getContactByUserId)

export default router;