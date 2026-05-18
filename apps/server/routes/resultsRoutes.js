/**
 * @swagger
 * tags:
 *   name: Results
 *   description: Scoring results
 */

/**
 * @swagger
 * /api/results:
 *   get:
 *     tags: [Results]
 *     summary: Get all results
 *     responses:
 *       200:
 *         description: Success
 */

const express = require('express');
const router = express.Router();

const controller = require('../controllers/resultsController');

router.get('/', controller.getResults);

module.exports = router;
