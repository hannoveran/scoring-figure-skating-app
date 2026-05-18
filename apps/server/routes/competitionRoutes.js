const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Competitions
 *   description: Competition management
 */

const controller = require('../controllers/competitionController');

/**
 * @swagger
 * /api/competitions:
 *   get:
 *     tags: [Competitions]
 *     summary: Get all competitions
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', controller.getCompetitions);

/**
 * @swagger
 * /api/competitions:
 *   post:
 *     tags: [Competitions]
 *     summary: Create competition
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Competition'
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', controller.createCompetition);

/**
 * @swagger
 * /api/competitions/{id}:
 *   get:
 *     tags: [Competitions]
 *     summary: Get competition by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Competition'
 *       404:
 *         description: Not found
 */
router.get('/:id', controller.getCompetitionById);

/**
 * @swagger
 * /api/competitions/{id}:
 *   put:
 *     tags: [Competitions]
 *     summary: Update competition
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Competition'
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', controller.updateCompetition);

/**
 * @swagger
 * /api/competitions/{id}:
 *   delete:
 *     tags: [Competitions]
 *     summary: Delete competition
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', controller.deleteCompetition);

module.exports = router;
