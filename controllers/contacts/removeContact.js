const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, 'contact not found');
  }

  res.json({ message: 'contact deleted successfully' });
};
module.exports = removeContact;