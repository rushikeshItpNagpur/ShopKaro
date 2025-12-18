const express = require('express');
const router = express.Router();
const mensController = require('../controllers/mens.controller');

router.post('/', mensController.createMens);
router.get('/', mensController.getAllMens);
router.get('/:id', mensController.getMensById);
// router.put('/:id', mensController.updateMens);
// router.delete('/:id', mensController.deleteMens);

module.exports = router;