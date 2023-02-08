import express from "express";
import fs from "fs";



const app = express();
app.use(express.static("public"));

//Configuro el servidor
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutándose en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor: ', PORT));

//Configuro las rutas
app.get('/products', (req,res) => {
    //falta poner lo del query params
    const readFiles = JSON.parse(fs.readFileSync('./products.json'));
    res.send(readFiles);
})


app.get('/products/:pid', (req,res) => {
    req.params['pid'];
    const readFiles = JSON.parse(fs.readFileSync('./products.json'));
    const productFound = readFiles.find(p => p.id === pid);
    res.send(productFound);
})