import { Router } from 'express'

const router = Router();

import * as detCtr from '../controllers/detalle.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken,detCtr.readAllDets);
router.get("/:id", checkToken, detCtr.readDet);
router.delete("/:id", checkToken, detCtr.delDet);
router.post("/", checkToken, detCtr.createDet);
router.put("/:id", checkToken, detCtr.updateDet)

export default router;