const { BASE_URL } = process.env;
const verifyEmail = (email, verificationToken) => {
  return {
    to: email,
    html: `<a target "_blank" href="${BASE_URL}/users/verify/${verificationToken}">click verify email</a>`,
  };
};

module.exports = verifyEmail;
