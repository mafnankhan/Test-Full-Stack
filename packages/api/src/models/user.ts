import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from '../lib/sequelize';
import { encrypt, compareHash } from '../lib/encryption'

export interface UserAttributes {
  id: number;
  email: string;
  passwordHash: string | null;
  password: string;
  resetToken: string | null;
  hasPassword: boolean;
}

interface UserCreationAttributes
  extends Pick<UserAttributes, 'email' | 'password'> {}

export default class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  public id!: number;
  public email!: string;
  public passwordHash!: string | null;
  public password!: string | null;
  public hasPassword!: boolean;
  public resetToken!: string | null;

  authenticate(newPassword: string) {
    if (!this.passwordHash || !newPassword) return null;
    return compareHash(newPassword, this.passwordHash);
  }

}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email is not valid.',
        },
        notEmpty: {
          msg: 'Email is required.',
        },
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      validate: {
        notEmpty: {
          msg: 'Password is required.',
        },
      },
    },
    resetToken: {
      type: DataTypes.STRING,
    },
    hasPassword: {
      type: DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['passwordHash']),
      get() {
        return this.get('passwordHash') && this.get('passwordHash') != null;
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
);

User.beforeCreate((user, options) => {
  if (!user.password) return;
  user.passwordHash = encrypt(user.password);
});

User.beforeUpdate((user, options) => {
  if (user.password) {
    user.passwordHash = encrypt(user.password);
  }
});
