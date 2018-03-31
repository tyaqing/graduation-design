'use strict';
module.exports = app => {
  const { STRING, DATE, BOOLEAN } = app.Sequelize;
  const User = app.model.define('user', {
    username: STRING,
    sex: BOOLEAN,
    birthday: DATE,
    tel: STRING,
    tel_sos: STRING,
    vehicle: STRING,
    medical_history: STRING,
  });
  return User;
};
