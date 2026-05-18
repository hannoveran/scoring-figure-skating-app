/**
 * @swagger
 * tags:
 *   name: System
 *   description: Server status
 */

/**
 * @swagger
 * /api/status:
 *   get:
 *     tags: [System]
 *     summary: Server status
 *     responses:
 *       200:
 *         description: Uptime and memory usage
 */

const express = require('express');

const router = express.Router();

const { getServerStatus } = require('../controllers/statusController');

router.get('/', getServerStatus);

module.exports = router;
