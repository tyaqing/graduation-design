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
  // 退出登录
  async logout() {
    // const { ctx } = this;
  }
  // 发送验证码
  async send_msm() {
    const { ctx } = this;
    const code = '2222';
    ctx.session.code = code;
    ctx.body = { code };
  }
}

module.exports = Public;
