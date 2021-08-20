const express = require("express");
const router = express.Router();

const usuariosControllers = require("../controllers/usuariosControllers")

const usuariosValidations = require("../validations/usuariosValidations")

router.get("/", usuariosControllers.getAll);

router.get("/:id",  usuariosValidations.get, usuariosControllers.getOne);

router.post("/", usuariosValidations.post, usuariosControllers.create);

router.delete("/:id", usuariosControllers.remove);

router.put("/:id", usuariosValidations.put, usuariosControllers.update);

module.exports = router;