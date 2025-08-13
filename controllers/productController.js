const productModel = require('../models/productModel');
const productView = require('../views/productView');

function getAllProducts(req, res) {
  productModel.getAllProducts((err, results) => {
    if (err) return productView.sendError(res, err);
    productView.sendProducts(res, results);
  });
}

function getProductById(req, res) {
  const id = req.params.id;
  productModel.getProductById(id, (err, results) => {
    if (err) return productView.sendError(res, err);
    productView.sendProduct(res, results[0]);
  });
}

function searchProducts(req, res) {
  const keyword = req.params.keyword;
  productModel.searchProducts(keyword, (err, results) => {
    if (err) return productView.sendError(res, err);
    productView.sendProducts(res, results);
  });
}

function createProduct(req, res) {
  productModel.createProduct(req.body, (err, result) => {
    if (err) return productView.sendError(res, err);
    productView.sendCreated(res, result.insertId);
  });
}

function updateProduct(req, res) {
  const id = req.params.id;
  productModel.updateProduct(id, req.body, (err) => {
    if (err) return productView.sendError(res, err);
    productView.sendSuccess(res, 'Product updated');
  });
}

function softDeleteProduct(req, res) {
  const id = req.params.id;
  productModel.softDeleteProduct(id, (err) => {
    if (err) return productView.sendError(res, err);
    productView.sendSuccess(res, 'Product soft-deleted');
  });
}

function restoreProduct(req, res) {
  const id = req.params.id;
  productModel.restoreProduct(id, (err) => {
    if (err) return productView.sendError(res, err);
    productView.sendSuccess(res, 'Product restored');
  });
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
