'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');
const moment = require('moment');
class MsmService extends Service {
  async send(tel, code) {
    const { ctx } = this;
    const timestamp = moment().format('YYYYMMDDHHmmss');
    const accountId = '8a48b5514d32a2a8014d80695ade37b6';
    const authToken = '29c3cbd1e1f64f7d8bffb1f7866ff742';
    const str1 = accountId + authToken + timestamp;
    const SigParameter = crypto
      .createHash('md5')
      .update(str1)
      .digest('hex');
    const Authorization = Buffer.from(`${accountId}:` + timestamp).toString(
      'base64'
    );
    const result = await ctx.curl(
      `https://app.cloopen.com:8883/2013-12-26/Accounts/${accountId}/SMS/TemplateSMS?sig=${SigParameter}`,
      {
        method: 'POST',
        dataType: 'json',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization,
        },
        data: {
          to: tel,
          appId: 'aaf98f894e0afaf7014e169fd7d404df',
          templateId: '1',
          datas: [ code, '45' ],
        },
      }
    );
    // console.log('msm', result);
    if (result.data.statusCode !== '000000') {
      ctx.throw(result.data.statusMsg, 404);
    }
    return result;
  }
}
module.exports = MsmService;
