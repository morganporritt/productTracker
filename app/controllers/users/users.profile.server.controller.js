'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors.server.controller.js'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	User = mongoose.model('User');

/**
 * Update user details
 *
 * @api {put} /users Update a User
 * @apiName users
 * @apiGroup User
 *
 * @apiParam{String} firstName First name of user
 * @apiParam{String} lastName Last name of user
 * @apiParam{String} email Email address of user
 * @apiParam{String} username Username that user would like to use to log in with
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "__v": 0,
 *          "displayName": "Morgan Porritt",
 *          "provider": "local",
 *          "username": "morganporritt1",
 *          "_id": "55d6d63bcda1435e7b5a77e1",
 *          "created": "2015-08-21T07:41:47.210Z",
 *          "roles": [
 *              "user"
 *          ],
 *          "email": "morgan@porritt.com",
 *          "lastName": "Porritt",
 *          "firstName": "Morgan"
 *      }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */
exports.update = function(req, res) {
	// Init Variables
	var user = req.user;
	var message = null;

	// For security measurement we remove the roles from the req.body object
	delete req.body.roles;

	if (user) {
		// Merge existing user
		user = _.extend(user, req.body);
		user.updated = Date.now();
		user.displayName = user.firstName + ' ' + user.lastName;

		user.save(function(err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				req.login(user, function(err) {
					if (err) {
						res.status(400).send(err);
					} else {
						res.json(user);
					}
				});
			}
		});
	} else {
		res.status(400).send({
			message: 'User is not signed in'
		});
	}
};

/**
 * Send User
 *
 * @api {get} /users/me Send User Information
 * @apiName users/me
 * @apiGroup User
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "__v": 0,
 *          "displayName": "Morgan Porritt",
 *          "provider": "local",
 *          "username": "morganporritt1",
 *          "_id": "55d6d63bcda1435e7b5a77e1",
 *          "created": "2015-08-21T07:41:47.210Z",
 *          "roles": [
 *              "user"
 *          ],
 *          "email": "morgan@porritt.com",
 *          "lastName": "Porritt",
 *          "firstName": "Morgan"
 *      }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "message": "Error Message"
 *     }
 *
 */
exports.me = function(req, res) {
	res.json(req.user || null);
};