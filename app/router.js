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
  // 上传位置
  router.post('/location', controller.user.location);
  // 发送验证码
  router.post('/send_msm', controller.public.send_msm);
  // router.post('/location',controller.)
};
