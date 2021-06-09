import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken,userCtr.readAllUsers);
router.post("/", checkToken,userCtr.createUser);

export default router;