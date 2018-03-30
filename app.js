'use strict';
module.exports = app => {
  // 生成数据库
  app.beforeStart(function* () {
    console.log('我执行了吧');
    yield app.model.sync();
  });
};
