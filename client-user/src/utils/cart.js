class Cart {
    products = {};
    totalPrice = 0;
    totalQuantity = 0;

    constructor(oldCart) {
        if (oldCart) {
            this.products = oldCart.products;
            this.totalPrice = oldCart.totalPrice;
            this.totalQuantity = oldCart.totalQuantity;
        }
    }

    /**
     * add single product into cart
     * @param {json} product product info
     * @param {string} id productID
     */
    addCart(product, id) {
        let newProduct = { productInfo: product, quantity: 0, price: product.p_price };

        if (this.products[id]) {
            newProduct = this.products[id];
        }

        newProduct.quantity++;
        newProduct.price = product.p_price * newProduct.quantity;

        this.products[id] = newProduct;
        this.totalPrice += product.p_price;
        this.totalQuantity++;
    }
    
    /**
     * add multi product into cart
     * @param {json} product productInfo
     * @param {string} id productId
     * @param {number} quantity quantity of product want to add cart
     */
    addCartWithQuantity (product, id, quantity) {
        let newProduct = { productInfo: product, quantity: 0, price: product.p_price };

        if (this.products[id]) {
            newProduct = this.products[id];
        }

        newProduct.quantity += quantity;
        newProduct.price = product.p_price * newProduct.quantity;

        this.products[id] = newProduct;
        this.totalPrice += quantity * (product.p_price);
        this.totalQuantity += quantity;
    }

    /**
     * remove product from cart
     * @param {string} id 
     */
    removeItemCart (id) {
        this.totalQuantity -= this.products[id].quantity;
        this.totalPrice -= this.products[id].price;

        delete this.products[id];
    }
}

module.exports = Cart;