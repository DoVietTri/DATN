const mongoose = require('mongoose');

const OrderDetailSchema = mongoose.Schema({
    od_price: Number,
    od_quantity: Number,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema, 'order_detail');
