import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync.js';

const register = catchAsync(async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const tokens = 'tokens';
  res.status(httpStatus.CREATED).send({ user, tokens });
});

export { register };
