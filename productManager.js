

 class ProductManager{
    constructor(){
        this.products = [];
    }
 


 getProducts = () =>{
    return this.products;
 }

 addProduct = (title, description, price, thumbnail, code, stock) => {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
      }

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
          console.log(`El campo ${code} esta ya en uso`);
          break;
        }
    }     

    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: []
    }

    if (this.products.length === 0){
        product.id = 1
    }else{
        product.id = this.products [this.products.length -1 ].id+1
    }

    this.products.push(product)
 }

 getProductById = (idProduct) =>{
    const productSave = this.products.findIndex(product => product.id === idProduct);

    if (productSave === -1){
        console.log("Not Found")
        return;
    }

    const productAdd = this.products [productSave].products.includes(idProduct);

    if (productAdd){
        console.log ("El producto se agrego con exito");
        return;
    }
    this.products[productSave].products.push(idProduct);
 }
}; 

 const handleProducts = new ProductManager ();
 handleProducts.addProduct ('Memoria Ram','8gb 3200mhz',15000,'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/MD8GSD4320016XSRGB_800.jpg','12044','5')
 handleProducts.addProduct ('Tarjeta Grafica','8gb',200000,'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/MD8GSD4320016XSRGB_800.jpg','12045','3')
 handleProducts.addProduct ('Fuente','1000 Watts 80plus Platinum',30000,'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/MD8GSD4320016XSRGB_800.jpg','12046','5')
 

handleProducts.getProductById(1);
handleProducts.getProductById(2);
handleProducts.getProductById(3);


console.log (handleProducts.getProducts());