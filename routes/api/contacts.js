const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/contacts');
const { schemas } = require('../../models/contact');
const { validateBody, isValidId, authenticate } = require('../../middlewares');

router.get('/', authenticate, ctrl.listContacts);

router.get('/:contactId', authenticate, isValidId, ctrl.getContactById);

router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.delete('/:contactId', authenticate, isValidId, ctrl.removeContact);

router.put(
  '/:contactId',
  isValidId,
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
