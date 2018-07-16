import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';

let router = Router();

router.post('/login', (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.password);
    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.log(err);
            console.log('Coming from router.post in Auth.js')
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

export default router;