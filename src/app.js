export default class ProductManager {
    constructor() {
      this.products = [
          {Producto: 1, Descripción: 1, Imagen: 1,},
          {Producto: 2, Descripción: 2, Imagen: 2,},
          {Producto: 3, Descripción: 3, Imagen: 3,},
          {Producto: 4, Descripción: 4, Imagen: 4,},
          {Producto: 5, Descripción: 5, Imagen: 5,},
          {Producto: 6, Descripción: 6, Imagen: 6,},
          {Producto: 7, Descripción: 7, Imagen: 7,},
          {Producto: 8, Descripción: 8, Imagen: 8,}
    ]; 
    }

    generateUniqueId() {

        let id = Math.random().toString(36).substr(2, 8);

        while (this.products.some(p => p.id === id)) {
          
          id = Math.random().toString(36).substr(2, 8);
        }
    
       
        return id;
      }

    addProduct(title, description, price, thumbnail, code, stock) {
    
    const id = this.generateUniqueId();

      this.products.push({
        id: id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let product = this.products.find(p => p.id === id);
      if (!product) {
        console.error('No se ha encontrado un producto con este id');
      }
      return product;
    }
    updateProduct(id,title, description, price, thumbnail, code, stock) {
     
        this.products.push({
            id: id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
          });
      }

      deleteProduct(id) {
        
        this.products.splice(id, 1);
  }
  }
  



let productManager = new ProductManager();







console.log(productManager.getProducts()); 