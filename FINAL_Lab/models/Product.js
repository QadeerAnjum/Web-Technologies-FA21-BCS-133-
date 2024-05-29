const mongoose = require("mongoose");

// Define the schema for a Product
const productSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
description: {
type: String,
required: true
},
price: {
type: String,
required: true
},
category: {
type: String,
required: true
},
isFeatured: {
type: String,
default: true
}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;