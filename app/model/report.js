'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const Report = app.model.define('report', {
    type: STRING,
  });
  return Report;
};
