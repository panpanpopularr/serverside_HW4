const db = require('../config/db');

function getAllProducts(callback) {
  db.query('SELECT * FROM products WHERE is_deleted = 0', callback);
}

function getProductById(id, callback) {
  db.query('SELECT * FROM products WHERE id = ? AND is_deleted = 0', [id], callback);
}

function searchProducts(keyword, callback) {
  const key = `%${keyword}%`;
  db.query('SELECT * FROM products WHERE name LIKE ? AND is_deleted = 0', [key], callback);
}

function createProduct(data, callback) {
  const { name, price, discount, review_count, image_url } = data;
  const query = 'INSERT INTO products (name, price, discount, review_count, image_url) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, price, discount, review_count, image_url], callback);
}

function updateProduct(id, data, callback) {
  const { name, price, discount, review_count, image_url } = data;
  const query = 'UPDATE products SET name = ?, price = ?, discount = ?, review_count = ?, image_url = ? WHERE id = ?';
  db.query(query, [name, price, discount, review_count, image_url, id], callback);
}

function softDeleteProduct(id, callback) {
  db.query('UPDATE products SET is_deleted = 1 WHERE id = ?', [id], callback);
}

function restoreProduct(id, callback) {
  db.query('UPDATE products SET is_deleted = 0 WHERE id = ?', [id], callback);
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProducts,
  createProduct,
  updateProduct,
  softDeleteProduct,
  restoreProduct,
};
