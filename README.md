# Product Tracker
https://products.morganporritt.com

> This project is for an independent study that I did on the MEAN stack.  It utilizes all of the technologies in the MEAN stack (MongoDB, Express.js, Angular.js, and Node.js).

## API Documentation
https://api.products.morganporritt.com

## Installation
Make sure that you have node, mongodb, and grunt installed globally.
#### Node
Installation can be found at https://nodejs.org/
#### MongoDB
Installation can be found at https://www.mongodb.org
#### Grunt
```sh
$ npm install -g grunt-cli
```

Once you have those programs installed you will want to make sure that you start up mongodb
```sh
$ mongod
```

In another terminal window install the dependencies.
```sh
$ npm install
```

And finally start the app
```sh
$ npm start
  MEAN.JS application started on port 3000
```

Navigate to http://localhost:3000 to view the app.


## Unit tests
```sh
$ npm test
> productTracker@0.0.1 test /Users/morgan/Documents/webProjects/productTracker
> grunt test

Running "env:test" (env) task

Running "mochaTest:src" (mochaTest) task
Application loaded using the "test" environment configuration
MEAN.JS application started on port 3001


  Wait for database connection:
    ✓ should be connected (524ms)

  Category API
    authenticated create request with
      valid category
        ✓ returns success status
        ✓ returns category details including new id
        ✓ is saved in database (258ms)
      empty name
        ✓ returns invalid status
        ✓ returns validation message
      name longer than 15 chars in length
        ✓ returns invalid status
        ✓ returns validation message
      duplicate name
        ✓ returns invalid status
        ✓ returns validation message
    authenticated get request with
      no parameters
        ✓ lists all categories in alphabetical order
      valid category id
        ✓ returns success status
        ✓ returns the expected category
      invalid category id
        ✓ returns not found status
    authenticated update request with
      valid category
        ✓ returns success status
        ✓ returns category details
        ✓ is updated in database (252ms)
        ✓ only updates specified record (258ms)
      empty category name
        ✓ returns invalid status
        ✓ returns validation message
      category name longer than 15 chars in length
        ✓ returns invalid status
        ✓ returns validation message
      duplicate category name
        ✓ returns invalid status
        ✓ returns validation message
    authenticated delete request with
      valid category id
        ✓ returns success status
        ✓ returns category details
        ✓ is deleted from database (420ms)
      invalid category id
        ✓ returns not found status

  Product API
    authenticated crete request with
      empty name
        ✓ returns invalid status
        ✓ returns validation message
      name longer than 40 chars in length
        ✓ returns invalid status
        ✓ returns validation message
    authenticated get request with
      no parameters
        ✓ lists all products in alphabetical order
      valid product id
        ✓ returns success status
        ✓ returns the expected product
      invalid product id
        ✓ returns not found status
    authenticated update request with
      valid product
        ✓ returns success status
        ✓ returns product details
        ✓ is updated in database (248ms)
        ✓ only updates specified record (255ms)
      empty product name
        ✓ returns invalid status
        ✓ returns validation message
      product name longer than 40 chars in length
        ✓ returns invalid status
        ✓ returns validation message
    authenticated delete request with
      valid product id
        ✓ returns success status
        ✓ returns product details
        ✓ is deleted from database (417ms)
      invalid product id
        ✓ returns not found status

  User Model Unit Tests:
    Method Save
      ✓ should begin with no users (55ms)
      ✓ should be able to save without problems (84ms)
      ✓ should fail to save an existing user again (108ms)
      ✓ should be able to show an error when try to save without first name


  52 passing (14s)


Done, without errors.
```
