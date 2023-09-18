const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const updateAvatar = require('./updateAvatar');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

module.exports = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logoutUser: ctrlWrapper(logoutUser),
  updateAvatar: ctrlWrapper(updateAvatar),
};
