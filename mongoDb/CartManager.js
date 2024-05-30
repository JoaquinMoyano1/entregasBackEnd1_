const Cart = require('../models/Cart');

class CartManager {
  async createCart(user) {
    return await Cart.create({ user, products: [] });
  }

  async getCartById(id) {
    return await Cart.findById(id).populate('products.product');
  }

  async addToCart(cartId, productId, quantity) {
    const cart = await Cart.findById(cartId);
    const productIndex = cart.products.findIndex(p => p.product.toString() === productId);

    if (productIndex >= 0) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    return await cart.save();
  }

  async removeFromCart(cartId, productId) {
    const cart = await Cart.findById(cartId);
    cart.products = cart.products.filter(p => p.product.toString() !== productId);
    return await cart.save();
  }

  async clearCart(cartId) {
    const cart = await Cart.findById(cartId);
    cart.products = [];
    return await cart.save();
  }
}

module.exports = new CartManager();
