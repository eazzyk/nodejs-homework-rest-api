const { HttpError } = require('../../helpers');
const { User } = require('../../models/user');

const verifyUser = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(404, 'User not found');
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: null,
  });

  res.json({ message: 'Verification successful' });
};

module.exports = verifyUser;
