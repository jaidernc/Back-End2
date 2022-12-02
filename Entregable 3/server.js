const express = require('express');

const fs = require('fs');
const { domainToASCII } = require('url');

class contenedor {
    constructor(file){
      this.file = file
    }

    async getAll() {
        try{
          const objects = await fs.promises.readFile( this.file, 'utf-8')
          return JSON.parse(objects,null,2)
    
        } catch(err) {
          console.log(`Error: ${err}`)
        }
      
    }

    async productosRandom(){
        
        try {
            
        }catch(err) {
            console.log(`Error: ${err}`)
        }
    }
  };

  

  
const productos = new contenedor('productos.txt')

const prueba = async() => {
let array = await productos.getAll()
console.log(array)
}

const app = express();

const PORT = 8080;

const server = app.listen(PORT,()  =>{
    console.log('I am Ready');
});

app.get('/productos',(request,response) =>{
    async function getProducts(){
      let products = await productos.getAll(); 
      response.send(products);
    }
    
    getProducts();
  })


app.get('/porductoRandom',(request,response) =>{
    response.send ({});
});

/*app.get('/productos',(request,response) =>{
    response.send(prueba());
});*/