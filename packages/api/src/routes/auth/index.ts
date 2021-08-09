import express, { Router } from 'express';
const router = Router();
import { body, param, validationResult } from 'express-validator';
import { User } from '../../models'
import { comparePassword } from '../../lib/encryption'
const { encrypt } = require('../../utils/crypto');

const checkValidation = (req: express.Request, res: express.Response, next: Function) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
}

router.post('/changepassword/:hash', 
    body('currentPassword').isLength({ min: 6 }).withMessage('must be at least 6 chars long'),
    body('newPassword').isLength({ min: 6 }).withMessage('must be at least 6 chars long'),
    param('hash').exists().withMessage('please provide a password request hash'),
    body('currentPassword').custom(async (value: any, { req } : any) => {
        const { hash } = req.params;
        if (value === req.body.newPassword) {
          throw new Error('Password should not be same with new password');
        }
        const currentUser = await comparePassword(hash, value)

        if (!currentUser) {
            throw new Error('Current Password or Change Password token is invalid');
        }

        req.user = currentUser;

        return true
    }),
    checkValidation, 
    async (req: express.Request, res: express.Response) => {
        const { newPassword } = req.body;
        const { user } = req;

        await user.update({
            password: newPassword
        })

        res.send({
            message: 'Password has been reset successfully'
        })
    })


router.post('/passwordreset', 
    body('email').isEmail().withMessage('must be a valid email'),
    checkValidation, 
    async (req: express.Request, res: express.Response) => {
        const { email } = req.body;
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            res.send({
                message: 'Email doesnot exist'
            })
            return
        }

        const enc = encrypt(email)

        await user.update({
            resetToken: enc,
        });

        res.send({
            message: "success",
            data: {
                hash: enc
            }
        })
    })

module.exports = router;