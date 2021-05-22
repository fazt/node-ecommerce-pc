import { Router } from "express";
import csrf from 'csurf'
import { renderIndex } from "../controllers/index";
import { renderSignupView, signup, profile } from '../controllers/auth.controller'

const router = Router();

router.use(csrf());

router.get("/", renderIndex);

router.get('/auth/signup', renderSignupView)

router.post('/auth/signup', signup)

router.get('/profile', profile);

export default router;
