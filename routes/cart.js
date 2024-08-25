const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      menuItem: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
      restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
