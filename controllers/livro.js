const fs = require('fs');
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletarPorId } = require('../svc/livro');

const getLivros = (req, res) => {
    try {
        const livros = getTodosLivros();
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getLivro = (req, res) => {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const livro = getLivroPorId(id);
            res.send(livro)
        } else {
            res.status(422).send("id invalido")
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const postLivro = (req, res) => {
    try {
        const livroNovo = req.body;
        const nome = req.body.nome
        const id = req.body.id

        if (nome && id) {
            insereLivro(livroNovo)
            res.status(201).send("Livro criado com sucesso")
        } else {
            res.status(422).send(`Campo ${!nome ? "nome" : !id ? "id" : nome} é obrigatorio`)
        }

    } catch (error) {
        res.status(500).send(error.message)

    }
}

const patchLivro = (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        if (id && Number(id)) {
            modificaLivro(body, id)
            res.send("item modificado com sucesso!")
        } else {
            res.status(422).send("id invalido")
        }

    } catch (error) {
        res.status(500).send(error.message)

    }
}

const deleteLivro = (req, res) => {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deletarPorId(id)
            res.send("item deletado com sucesso!")
        } else {
            res.status(422).send("id invalido")
        }

    } catch (error) {
        res.status(500).send(error.message)

    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}