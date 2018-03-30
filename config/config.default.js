'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522213360657_7903';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'safety',
    host: '114.215.112.167',
    port: '3306',
    username: 'safety',
    password: 'cnARxpp3EYZ4KZiX',
  };

  return config;
};
