'use strict';
module.exports = app => {
  const { STRING, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    username: STRING,
    birthday: DATE,
    tel: STRING,
  });
  return User;
};
