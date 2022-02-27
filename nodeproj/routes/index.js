const express = require('express');
const logger = require('../lib/logger');
const boardRouter = require('./board');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// board
router.use('/boards', boardRouter);

module.exports = router;
