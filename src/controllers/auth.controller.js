const authService = require('../services/auth.service');

const register = async (req, res) => {
  try {
    await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json({ token });
  } catch {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

const me = async (req, res) => {
  const user = await authService.getProfile(req.user.id);
  res.json(user);
};

module.exports = {
  register,
  login,
  me
};
