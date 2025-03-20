const express = require("express");
const router = express.Router();
const{lista, crear, editar, borrar} =require("../controllers/index")



router.get("/lista", lista)
// router.post("/crear", crear)
// router.put("/editar/:id", editar)
// router.delete("/borrar/:id", borrar)









module.exports = router;