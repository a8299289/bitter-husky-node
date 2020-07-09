'use strict';

const Controller = require('egg').Controller;

class membersController extends Controller {
  async save() {
    console.log('save');
    const ctx = this.ctx;
    console.log(ctx.body);
    const params = {
      userName:'',
      password:'',
    };
    // ctx.body = await ctx.service.members.list(query);

  }
  async info() {
    console.log('info');
    const ctx = this.ctx;
    console.log(ctx.body);
    const params = {
      userName:'',
      password:'',
    };
    // ctx.body = await ctx.service.members.list(query);

  }

}

module.exports = membersController;
