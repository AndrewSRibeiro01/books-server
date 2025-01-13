const fs = require('fs');

const getTodosFavoritos = () => {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

const deletaFavoritosPorId = (id) => {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));
    const livrosFiltrados = livros.filter(f => f.id !== id);
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
}

const insereFavorito = (id) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    const livroInserido = livros.find(f => f.id === id);
    const novaListaDeFavoritos = [...favoritos, livroInserido];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeFavoritos));
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritosPorId,
    insereFavorito
}