const productManager = require('../dao/mongoDb/ProductManager');

class ProductService {
  async createProduct(data) {
    return await productManager.createProduct(data);
  }

  async getProducts() {
    return await productManager.getProducts();
  }

  async getProductById(id) {
    return await productManager.getProductById(id);
  }

  async updateProduct(id, data) {
    return await productManager.updateProduct(id, data);
  }

  async deleteProduct(id) {
    return await productManager.deleteProduct(id);
  }
}

module.exports = new ProductService();
