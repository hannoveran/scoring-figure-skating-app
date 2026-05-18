const getServerStatus = (req, res) => {
  res.status(200).json({
    success: true,

    uptime: process.uptime(),

    memoryUsage: process.memoryUsage(),

    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getServerStatus,
};
