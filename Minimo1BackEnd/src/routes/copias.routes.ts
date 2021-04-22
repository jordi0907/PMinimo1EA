import { Router } from "express";
import {courses} from '../controller/courses.controller';
import {getCopias, newCopiaSeguridad, updateCopiaSeguridad, getResultadoClinico, deleteCopiaSeguridad} from '../controller/copias.controller';

/* import { courses } from "../controllers/courses.controller"; */

const router = Router();

router.get('/', getCopias);
router.post('/', newCopiaSeguridad);
router.put('/:id', updateCopiaSeguridad);
router.get('/:id', getResultadoClinico);
router.delete('/:id', deleteCopiaSeguridad)

export default router;