const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  stock: { type: Schema.Types.ObjectId, ref: 'Stock', required: true },
  quantity: { type: Number, required: true },
  requestType: { type: String, enum: ['checkout', 'restock'], required: true },
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending' },
  requestDate: { type: Date, default: Date.now },
  approvedDate: { type: Date }
});

module.exports = mongoose.model('Request', RequestSchema);
