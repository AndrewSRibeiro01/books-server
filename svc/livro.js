const fs = require('fs');

const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("livros.json"))
}

const getLivroPorId = (id) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter(f => f.id === id)[0];

    return livroFiltrado
}

const insereLivro = (livroNovo) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

const modificaLivro = (modificacoes, id) => {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex(f => f.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

const deletarPorId = (modificacoes, id) => {
    let livros = JSON.parse(fs.readFileSync("livros.json"));

    const livrosFiltrados = livros.filter(f => f.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarPorId
}