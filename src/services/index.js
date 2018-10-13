const productList = require('./product-list/product-list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(productList);
};
