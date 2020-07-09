'use strict';

const Service = require('egg').Service;

class Members extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.Member.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }
}

module.exports = Members;
