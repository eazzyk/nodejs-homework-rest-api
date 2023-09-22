const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const updateAvatar = require('./updateAvatar');
const verifyUser = require('./verifyUser');
const returnVerifyUser = require('./returnVerifyUser');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

module.exports = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logoutUser: ctrlWrapper(logoutUser),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyUser: ctrlWrapper(verifyUser),
  returnVerifyUser: ctrlWrapper(returnVerifyUser),
};
