import userValidator from '../validators/user.validator';
import { hash } from '../utils/hash.util';
import { userCollection } from '../services/mongo.service';

export default async (req, res) => {
  let user;
  let response;

  try {
    user = {
      email: req.body.email,
      password: await hash(req.body.password),
    };
  } catch (e) {
    return res.status(422).json({
      message: e.message,
      code: 'auth-api.register.building.failed',
    });
  }

  try {
    await userValidator(user);
  } catch (e) {
    return res.status(422).json({
      message: e.message,
      code: 'auth-api.register.validation.failed',
    });
  }

  try {
    const dbUser = await userCollection().find({ email: user.email }).toArray();
    if (dbUser.length) {
      return res.status(409).json({
        message: `The user ${user.email} already exist`,
        code: 'auth-api.register.duplicate.failed',
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      code: 'auth-api.register.find.failed',
    });
  }

  try {
    response = await userCollection().insertOne(user);
  } catch (e) {
    return res.status(500).json({
      message: e.message,
      code: 'auth-api.register.insertOne.failed',
    });
  }

  return res.status(200).json(response.result);
};
