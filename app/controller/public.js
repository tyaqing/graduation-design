'use strict';
const Controller = require('egg').Controller;

class Public extends Controller {
  // 登陆
  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.body = body;
  }
  // 注册
  async register() {
    const { ctx } = this;
    const { body } = ctx.request;
    // 查重
    const User = ctx.model.User;
    let user = await User.findOne({ where: { tel: body.tel } });
    if (user) ctx.throw(404, '该用户已被注册');
    user = await User.create(body);
    ctx.login(user);
    ctx.body = { message: '注册成功' };
  }
}

module.exports = Public;
