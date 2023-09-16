const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!result) {
    throw HttpError(404, ' not found');
  }
  res.json(result);
};
module.exports = updateContact;