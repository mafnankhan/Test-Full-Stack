import { Router } from 'express';
const router = Router();
const auth = require('./auth');

router.get('/ping', (req: any, res: any) => {
    res.send('OK');
});

router.use('/auth', auth);

module.exports = router;