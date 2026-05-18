require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const responseTimeMiddleware = require('./middleware/responseTimeMiddleware');
const logger = require('./utils/logger');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// SECURITY MIDDLEWARE
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// LOGGING
app.use(morgan('dev'));
app.use(responseTimeMiddleware);

// RATE LIMITING
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: {
    message: 'Забагато запитів, спробуйте пізніше',
  },
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many login attempts',
});

app.use(limiter);

// ROUTES
const competitionRoutes = require('./routes/competitionRoutes');
const resultsRoutes = require('./routes/resultsRoutes');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const statusRoutes = require('./routes/statusRoutes');

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.use('/api/competitions', competitionRoutes);
app.use('/api/results', resultsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/status', statusRoutes);

// ERROR HANDLING
app.use(errorMiddleware);

// =====================
const PORT = 3001;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
