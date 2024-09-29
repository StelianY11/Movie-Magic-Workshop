import { Router } from 'express';

const router = Router();

router.get('/create', (req, res) => {
    res.render('movies/create')
})

export default router;