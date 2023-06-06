const express = require("express");
const { loginController } = require("../controllers/loginController");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../swagger");

const router = express.Router();

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.get("/login/:username/:password", loginController);

module.exports = {
  routes: router,
};
