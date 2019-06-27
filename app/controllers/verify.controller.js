import { tokenVerify } from '../utils/token.util';

export default async (req, res) => {
  const { authorization } = req.headers;

  try {
    tokenVerify(authorization);
  } catch (e) {
    return res.status(401).json({
      message: e.message,
      code: 'auth-api.verify.token.failed',
    });
  }

  return res.status(200).json();
};
