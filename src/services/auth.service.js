const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const registerUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return User.create({
    name,
    email,
    password: hashedPassword
  });
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) throw new Error('INVALID_CREDENTIALS');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('INVALID_CREDENTIALS');

  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );

  
};

const getProfile = async (userId) => {
  return User.findByPk(userId, {
    attributes: { exclude: ['password'] }
  });
};

module.exports = {
  registerUser,
  loginUser,
  getProfile
};
