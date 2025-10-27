const { getTodosFavoritos, insereFavorito, deletaFavoritosPorId } = require('../svc/favorito');

const getFavoritos = (req, res) => {
    try {
        const livros = getTodosFavoritos();
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const postFavorito = (req, res) => {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201).send("Livro criado com sucesso")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteFavorito = (req, res) => {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deletaFavoritosPorId(id)
            res.send("item deletado com sucesso!")
        } else {
            res.status(422).send("id invalido")
        }
    } catch (error) {
        res.status(500).send(error.message)

    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}