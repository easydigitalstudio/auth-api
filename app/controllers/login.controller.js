import { userCollection } from '../services/mongo.service';
import { compare } from '../utils/hash.util';
import { tokenConstruct } from '../utils/token.util';
import userValidator from '../validators/user.validator';

export default async (req, res) => {
  let user;
  let dbUser;
  let token;

  try {
    user = {
      email: req.body.email,
      password: req.body.password,
    };
  } catch (e) {
    return res.status(422).json({
      message: e.message,
      code: 'auth-api.login.building.failed',
    });
  }

  try {
    await userValidator(user);
  } catch (e) {
    return res.status(422).json({
      message: e.message,
      code: 'auth-api.login.validation.failed',
    });
  }

  try {
    [dbUser] = await userCollection().find({ email: user.email }).toArray();
    if (!dbUser) {
      return res.status(404).json({
        message: `The user ${user.email} does not exist`,
        code: 'auth-api.login.not.exist.failed',
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      code: 'auth-api.login.find.failed',
    });
  }

  try {
    const match = await compare(user.password, dbUser.password);
    if (!match) {
      return res.status(401).json({
        message: 'Wrong password',
        code: 'auth-api.login.wrong.password.failed',
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      code: 'auth-api.login.compare.failed',
    });
  }

  try {
    const { _id } = dbUser;
    token = tokenConstruct({
      email: user.email,
      id: _id,
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      code: 'auth-api.login.token.failed',
    });
  }

  return res.status(200).json({
    token,
  });
};
