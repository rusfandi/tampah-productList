// Initializes the `productList` service on path `/product-list`
const createService = require('feathers-knex');
const createModel = require('../../models/product-list.model');
const hooks = require('./product-list.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'product_list',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-list', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-list');

  service.hooks(hooks);
};
  