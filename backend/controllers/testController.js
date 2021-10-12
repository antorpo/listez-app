/**
 * Controller for testing Authorization
 */
allAccess = (req, res) => {
  res.status(200).json({ mensaje: "Public content" });
};

studentBoard = (req, res) => {
  res.status(200).json({ mensaje: "Student content" });
};

adminBoard = (req, res) => {
  res.status(200).json({ mensaje: "Admin content" });
};

tutorBoard = (req, res) => {
  res.status(200).json({ mensaje: "Tutor content" });
};

module.exports = Object.freeze({
  allAccess,
  studentBoard,
  adminBoard,
  tutorBoard,
});
