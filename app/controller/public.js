'use strict';
const Controller = require('egg').Controller;

class Public extends Controller {
  // 登陆
  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    // 验证验证码
    if (ctx.user) ctx.throw('已经登陆', 301);
    // 查找用户
    const user = await ctx.model.User.findOne({
      where: {
        tel: body.tel,
      },
    });
    if (!user) ctx.throw('用户不存在', 404);
    if ((ctx.session.code = body.code)) {
      ctx.login(user);
    }
    ctx.body = { message: '登陆成功' };
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
  // 退出登录
  async logout() {
    const { ctx } = this;
    ctx.logout();
    ctx.body = { message: '退出成功' };
  }
  // 发送验证码
  async send_msm() {
    const { ctx } = this;
    const body = ctx.request.body;
    const user = await ctx.model.User.findOne({ where: { tel: body.tel } });
    if (!user) ctx.throw('用户不存在', 404);
    const code = parseInt(Math.random() * (9999 - 1000) + 1000);
    ctx.session.code = code;
    // 发送验证码

    ctx.body = {
      code,
      send_result: await ctx.service.msm.send(body.tel, code),
    };
  }
}

module.exports = Public;
