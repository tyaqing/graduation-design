'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async location() {
    const { ctx } = this;
    const body = ctx.request.body;
    const result = await ctx.service.map.location(body);
    console.log('result', result);
    ctx.body = result;
  }
}
module.exports = UserController;
