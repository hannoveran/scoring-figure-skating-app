const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'Figure Skating Scoring API',
      version: '1.0.0',
      description: 'REST API for figure skating scoring system',
    },

    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },

      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string' },
            role: { type: 'string' },
          },
        },

        Competition: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            date: { type: 'string' },
            location: { type: 'string' },
            category: { type: 'string' },
            segment: { type: 'string' },
            status: { type: 'string' },
          },
        },

        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
          },
        },

        Success: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
            },
          },
        },
      },
    },
  },

  apis: ['./routes/*.js', './controllers/*.js'],
});

module.exports = swaggerSpec;
