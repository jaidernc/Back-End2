const express = require('express');
const {Router} = express;
const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json());

const productosRouter = Router();
const PORT = 8080

const NewProducto = {
                    id:6, nombre: 'Plancha', precio:323.45
                    }
const productos = [
    { id:1, nombre: 'Escuadra', precio:323.45 },
    { id:2, nombre: 'Calculadora', precio:234.56 },
    { id:3, nombre: 'Globo Terráqueo', precio:45.67 },
    { id:4, nombre: 'Paleta Pintura', precio:456.78 },
    { id:5, nombre: 'Reloj', precio:67.89 },
    { id:6, nombre: 'Agenda', precio:78.90 }
]



app.use('/api',productosRouter)
productosRouter.get('/productos', (req,res) => res.json(productos))
    
productosRouter.get('/productos/:id',(req,res) => {
    let id = req.params.id
    let productosid = productos.find(item => item.id == id);
    res.json(productosid)
})

productosRouter.post('/productos',(req,res) => {
    const {añadirProductos} = req.params;
    productos.push(NewProducto);
    res.json({añadido: NewProducto })
})

app.use('/api',productosRouter)

app.listen(PORT, () => console.log(`I'm Ready`))