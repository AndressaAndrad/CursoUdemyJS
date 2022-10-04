import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, alunoController.store); // C
router.get('/', alunoController.index); // R
router.get('/:id', alunoController.show); // R
router.put('/:id', loginRequired, alunoController.update); // U
router.delete('/:id', loginRequired, alunoController.delete); // D

export default router;
