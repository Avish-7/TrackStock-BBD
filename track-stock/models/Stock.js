const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    category: { type: String, required: true },        // e.g., Stationary, Banner, Bag, etc.
    branch: { type: String, required: true },          // Branch name or location?
    initialStock: { type: Number, required: true },
    currentStock: { type: Number, required: true },
    lowStockWarning: { type: Number, required: true }
});

module.exports = mongoose.model('Stock', StockSchema);
