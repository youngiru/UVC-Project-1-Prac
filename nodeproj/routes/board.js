const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const boardService = require('../service/boardService');

router.post('/', async (req, res) => {
  try {
    const params = {
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
    };
    logger.info(`(board.reg.params) ${JSON.stringify(params)}`);

    if (!params.name) {
      const err = new Error('Not allowed null (name)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    const result = await boardService.reg(params);
    logger.info(`(board.reg.result) ${JSON.stringify(result)}`);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
    };
    logger.info(`(board.list.params) ${JSON.stringify(params)}`);

    const result = await boardService.list(params);
    logger.info(`(board.list.result) ${JSON.stringify(result)}`);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(board.info.params) ${JSON.stringify(params)}`);

    const result = await boardService.info(params);
    logger.info(`(board.info.result) ${JSON.stringify(result)}`);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
    };
    logger.info(`(board.update.params) ${JSON.stringify(params)}`);

    const result = await boardService.edit(params);
    logger.info(`(board.update.result) ${JSON.stringify(result)}`);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(board.delete.params) ${JSON.stringify(params)}`);

    const result = await boardService.delete(params);
    logger.info(`(board.delete.result) ${JSON.stringify(result)}`);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
