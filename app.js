const express = require('express');
const cors = require('cors');
const router = require('./routes/livro');
const routerFavoritos = require('./routes/favoritos');

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/livros", router)
app.use("/favoritos", routerFavoritos)

const port = 8000

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})