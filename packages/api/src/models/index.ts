import User from './user';

const db: {
  [name: string]: any;
} = {
  User,
};

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export {
  User,
};
