/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const rateLimit = require('express-rate-limit');

const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many login attempts',
});

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - passwordConfirmation
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               passwordConfirmation:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */

// REGISTER
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Некоректний email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Пароль мінімум 6 символів'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    next();
  },
  authController.register,
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success login
 */

// LOGIN
router.post(
  '/login',
  loginLimiter,
  [
    body('email').isEmail().withMessage('Некоректний email'),
    body('password').notEmpty().withMessage('Password required'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
  authController.login,
);

// PROTECTED ROUTES

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Auth]
 *     summary: Get current user
 *     responses:
 *       200:
 *         description: User info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */
router.get('/me', authMiddleware, authController.getMe);

/**
 * @swagger
 * /api/auth/profile:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags: [Auth]
 *     summary: Update user profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.patch('/profile', authMiddleware, authController.updateProfile);

/**
 * @swagger
 * /api/auth/change-password:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Auth]
 *     summary: Change password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *               - newPasswordConfirmation
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               newPasswordConfirmation:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed
 */
router.post('/change-password', authMiddleware, authController.changePassword);
router.post('/refresh', authController.refresh);
router.post('/logout', authController.logout);
router.delete('/delete', authMiddleware, authController.deleteUser);

module.exports = router;
