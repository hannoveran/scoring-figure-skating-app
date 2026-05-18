const sequelize = require('../config/db');
const { Op } = require('sequelize');
const redisClient = require('../config/redis');
const Competition = require('../models/Competition');

// CREATE (INSERT)
exports.createCompetition = async (req, res) => {
  try {
    const { name, date, location, category, segment, status } = req.body;

    if (!name || !date) {
      return res.status(400).json({
        message: 'Name and date are required',
      });
    }

    const competition = await Competition.create({
      name,
      date,
      location,
      category,
      segment,
      status,
      created_by: 1,
    });

    await redisClient.del('competitions:all');

    res.status(201).json({
      success: true,
      data: competition,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error creating competition',
    });
  }
};

// READ (SELECT all)
exports.getCompetitions = async (req, res) => {
  try {
    const { Op } = require('sequelize');

    const data = await Competition.findAll({
      where: {
        status: {
          [Op.ne]: 'deleted',
        },
      },
    });

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: 'Error fetching competitions',
    });
  }
};

// UPDATE
exports.updateCompetition = async (req, res) => {
  try {
    const { id } = req.params;

    const competition = await Competition.findByPk(id);

    if (!competition) {
      return res.status(404).json({ message: 'Not found' });
    }

    const { name, date, location, category, segment, status } = req.body;

    const updated = await competition.update({
      name: name ?? competition.name,
      date: date ?? competition.date,
      location: location ?? competition.location,
      category: category || 'men_single',
      segment: segment || 'short_program',
      status: status || 'upcoming',
    });

    await redisClient.del('competitions:all');

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Update error' });
  }
};

// DELETE
exports.deleteCompetition = async (req, res) => {
  try {
    const { id } = req.params;

    await Score.destroy({
      where: {
        competition_id: id,
      },
    });

    await Program.destroy({
      where: { competition_id: id },
    });

    await Competition.destroy({
      where: { id },
    });

    await redisClient.del('competitions:all');

    res.json({
      success: true,
      message: 'Competition deleted',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Delete error' });
  }
};

exports.getCompetitionById = async (req, res) => {
  try {
    const { id } = req.params;

    const competition = await Competition.findByPk(id);

    if (!competition) {
      return res.status(404).json({
        message: 'Competition not found',
      });
    }

    res.json(competition);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error fetching competition',
    });
  }
};
