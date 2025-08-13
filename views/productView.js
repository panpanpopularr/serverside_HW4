function sendProducts(res, products) {
  res.render('products', { products });
}

function sendProduct(res, product) {
  if (product) {
    res.render('product', { product });
  } else {
    res.status(404).render('error', { message: 'Product not found' });
  }
}

function sendSuccess(res, message) {
  res.render('success', { message });
}

function sendCreated(res, id) {
  res.status(201).render('created', { id, message: 'Product created' });
}

function sendError(res, error) {
  res.status(500).render('error', { message: error.message || error });
}

module.exports = {
  sendProducts,
  sendProduct,
  sendSuccess,
  sendCreated,
  sendError,
};
