const cartManager = require('../dao/mongoDb/CartManager');

class CartService {
  async createCart(user) {
    return await cartManager.createCart(user);
  }

  async getCartById(id) {
    return await cartManager.getCartById(id);
  }

  async addToCart(cartId, productId, quantity) {
    return await cartManager.addToCart(cartId, productId, quantity);
  }

  async removeFromCart(cartId, productId) {
    return await cartManager.removeFromCart(cartId, productId);
  }

  async clearCart(cartId) {
    return await cartManager.clearCart(cartId);
  }
}

module.exports = new CartService();
