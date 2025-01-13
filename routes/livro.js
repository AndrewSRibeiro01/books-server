const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controllers/livro");

const router = Router()
    .get("/", getLivros)
    .get("/:id", getLivro)
    .post("/", postLivro)
    .patch("/:id", patchLivro)
    .delete("/:id", deleteLivro)

module.exports = router