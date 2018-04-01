'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  // 上传地理位置
  async location() {
    const { ctx } = this;
    const body = ctx.request.body;
    const result = await ctx.service.map.location(body);
    console.log('result', result);
    ctx.body = result;
  }
  // 报告
  async report() {
    const { ctx } = this;
    const body = ctx.request.body;
  }
  // 一键SOS
  async sos() {}
}
module.exports = UserController;
