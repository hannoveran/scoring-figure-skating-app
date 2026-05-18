const uploadFile = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'No files uploaded',
    });
  }

  const uploadedFiles = req.files.map((file) => file.filename);

  res.status(200).json({
    success: true,
    message: 'Files uploaded successfully',
    files: uploadedFiles,
  });
};

module.exports = {
  uploadFile,
};
