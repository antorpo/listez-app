const db = require("../models");
const Tutor = db.tutor;
const Usuarui = db.usuario;

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

tutoresList = (req, res) => {
  Tutor.find()
}

module.exports = Object.freeze({
  allAccess,
  studentBoard,
  adminBoard,
  tutorBoard,
  tutoresList,
});
