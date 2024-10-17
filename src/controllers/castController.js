import { Router } from "express";
import castService from "../services/castService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('cast/create');
});

router.post('/create', async (req, res) => {
    const cast = req.body;

    try {
        await castService.create(cast);
    } catch (error) {
        return res.render('cast/create', { error: getErrorMessage(error), cast });
    }

    res.redirect("/");
});

export default router;