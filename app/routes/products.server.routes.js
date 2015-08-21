'use strict';

module.exports = function(app) {
	var products = require('../controllers/products.server.controller');
	var users = require('../controllers/users.server.controller');
	var apiAuth = require('../controllers/api.authorization.server.controller');
	
	app.route('/products')
		.get(apiAuth, users.requiresLogin, products.list)
		.post(apiAuth, users.requiresLogin, products.create);

	app.route('/products/:productId')
		.get(apiAuth, users.requiresLogin, products.read)
		.put(apiAuth, users.requiresLogin, products.update)
		.delete(apiAuth, users.requiresLogin, products.delete);

	// Finish by binding the article middleware
	app.param('productId', products.getByID);
};
/**
 * @api {delete} /products/:productId Delete a product
 * @apiName delete products
 * @apiGroup Products
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "__v": 0,
 *       "_id": "55d6e836cda1435e7b5a77e9",
 *       "name": "product_name",
 *       "description": "description",
 *       "created": "2015-08-21T08:58:30.347Z"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */

/**
 * @api {put} /products/:productId Update a product
 * @apiName update products
 * @apiGroup Products
 *
 * @apiParam{String} name Name of the product
 * @apiParam{String} description Description of the product
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "__v": 0,
 *       "_id": "55d6e836cda1435e7b5a77e9",
 *       "name": "product_name",
 *       "description": "description",
 *       "created": "2015-08-21T08:58:30.347Z"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */

/**
 * @api {get} /products/:productId Get specific product
 * @apiName get specific products
 * @apiGroup Products
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "__v": 0,
 *       "_id": "55d6e836cda1435e7b5a77e9",
 *       "name": "product_name",
 *       "description": "description",
 *       "created": "2015-08-21T08:58:30.347Z"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */

/**
 * @api {post} /products Create a new product
 * @apiName create a products
 * @apiGroup Products
 *
 * @apiParam{String} name Name of the product
 * @apiParam{String} description Description of the product
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *            "__v": 0,
 *            "_id": "55d6e836cda1435e7b5a77e9",
 *            "name": "product_name",
 *            "description": "description",
 *            "created": "2015-08-21T08:58:30.347Z"
 *          }
 *     ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */

/**
 * @api {get} /products Get all products
 * @apiName get all products
 * @apiGroup Products
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "_id": "55d56b332dffc475a595a2a2",
 *          "__v": 0,
 *          "name": "Apparel & Accessories",
 *          "description": "Apparel & Accessories Descrtiption",
 *          "created": "2015-08-20T05:52:51.138Z"
 *        },
 *        {
 *          "_id": "55d56b6b2dffc475a595a2a3",
 *          "__v": 0,
 *          "name": "Arts, Crafts & Sewing",
 *          "description": "Arts, Crafts & Sewing Description",
 *          "created": "2015-08-20T05:53:47.235Z"
 *        }
 *     ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */