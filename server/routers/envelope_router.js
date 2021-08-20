const express = require('express');
const db = require('../envelopes.js');
const envelopeRouter = express.Router();


envelopeRouter.get('/',db.getEnvelopes);
envelopeRouter.get('/:id',db.getEnvelopeById);
envelopeRouter.post('/',db.createEnvelope);
envelopeRouter.put('/:id',db.updateEnvelope);
envelopeRouter.delete('/:id',db.deleteEnvelope);


module.exports = envelopeRouter;