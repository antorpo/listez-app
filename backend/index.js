const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// capturar body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

// Conexion a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.1gm1o.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, option)
  .then(() => {
    console.log("Base de datos conectada");
    initial();
  })
  .catch((e) => console.log("error db:", e));

// import routes
const { authRoutes, testRoutes } = require("./routes");

// route middlewares
app.use("/api/user", authRoutes);
app.use("/api/dashboard", testRoutes);

app.get("/", (req, res) => {
  res.json({
    estado: true,
    mensaje: "FUNCIONAL",
  });
});

app.listen(PORT, () => {
  console.log(`SERVIDOR ANDANDO EN: ${PORT}`);
});

const db = require("./models");
const Rol = db.rol;
const initial = () => {
  Rol.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      Rol.insertMany(
        [{ nombre: "estudiante" }, { nombre: "tutor" }, { nombre: "admin" }],
        (err) => {
          if (err) {
            console.error("Error", err);
          }

          console.log("Added to roles collection");
        }
      );
    }
  });
};
