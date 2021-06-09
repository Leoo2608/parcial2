import { Router } from 'express'

const router = Router();

import * as matCtr from '../controllers/matricula.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken,matCtr.readAllMats);
router.get("/:id", checkToken, matCtr.readMat);
router.delete("/:id", checkToken, matCtr.delMat);
router.post("/", checkToken, matCtr.createMat);
router.put("/:id", checkToken, matCtr.updateMat)

export default router;