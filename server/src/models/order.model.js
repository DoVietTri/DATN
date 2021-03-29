const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    o_code: String,
    o_status: { type: String, default: 'Tiếp nhận' },
    o_shippingAddress: String,
    o_phoneReceiver: String,
    o_nameReceiver: String,
    o_shippingFee: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema, 'order');
