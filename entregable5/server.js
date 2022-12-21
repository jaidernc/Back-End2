const { urlencoded } = require('express')
const express = require('express')

app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', './views')
app.set('views engine', 'pug')

const productos = []

app.get('/', (req,res)=>{
    res.render('form.pug', { productos: productos.sort((a, b) => b.precio - a.precio) });
})

app.post('/productos', (req,res)=>{
    const { name, precio, img } = req.body;
    productos.push({ name, precio, img });
    res.redirect('/');
})

app.listen(8080, ()=> console.log("I'm Ready"))