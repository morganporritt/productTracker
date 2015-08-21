'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Category = mongoose.model('Category'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Category', 'name');

module.exports = crud;
/*
 * @api {post} /categories Create a new categories
 * @apiName create categories
 * @apiGroup Categories
 *
 * @apiParam{String} name Name of the category
 * @apiParam{String} description Description of the category
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *		  	{
 *			  "__v": 0,
 *			  "_id": "55d6e836cda1435e7b5a77e9",
 *			  "name": "category_name",
 *			  "description": "description",
 *			  "created": "2015-08-21T08:58:30.347Z"
 *			}
 *	   ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */

/*
 * @api {get} /categories Get all categories
 * @apiName get categories
 * @apiGroup Categories
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *		  {
 *		    "_id": "55d56b332dffc475a595a2a2",
 *		    "__v": 0,
 *		    "name": "Apparel & Accessories",
 *		    "description": "Apparel & Accessories Descrtiption",
 *		    "created": "2015-08-20T05:52:51.138Z"
 *		  },
 *		  {
 *		    "_id": "55d56b6b2dffc475a595a2a3",
 *		    "__v": 0,
 *		    "name": "Arts, Crafts & Sewing",
 *		    "description": "Arts, Crafts & Sewing Description",
 *		    "created": "2015-08-20T05:53:47.235Z"
 *		  }
 *	   ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */