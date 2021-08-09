const bcrypt = require('bcrypt');
import { User } from '../../models'

const encrypt = (text: any) => {
    return bcrypt.hashSync(text, 10)
}

const compareHash = async (text: any, hash: any) => {
    return bcrypt.compareSync(text, hash)
}

const comparePassword = async (token: any, password: any) => {

    const user = await User.findOne({
        where: {
            resetToken: token,
        },
    });

    if (!user) return false;

    const checkPassword = compareHash(password, user.passwordHash)

    if (!checkPassword) return false;

    return user;
}

export { encrypt, compareHash, comparePassword };