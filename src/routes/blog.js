const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

router.use('/:id', blogController.detail);
router.use('/', blogController.index);

module.exports = router;