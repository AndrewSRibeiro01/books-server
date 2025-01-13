const { Router } = require("express")
const { getFavoritos, postFavorito, deleteFavorito } = require("../controllers/favorito");

const routerFavoritos = Router()
    .get("/", getFavoritos)
    .post("/:id", postFavorito)
    .delete("/:id", deleteFavorito)

module.exports = routerFavoritos