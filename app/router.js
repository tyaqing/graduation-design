'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const LocalStrategy = require('passport-local').Strategy;

  router.get('/', controller.home.index);
  router.post('/login', controller.public.login);
  router.post('/register', controller.public.register);

  // router.post('/location',controller.)
};
