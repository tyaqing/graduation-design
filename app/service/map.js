'use strict';
const Service = require('egg').Service;
class MapService extends Service {
  // 上传骑手的位置
  async location(body) {
    const { ctx } = this;
    const result = await ctx.curl(
      'http://yingyan.baidu.com/api/v3/track/addpoint',
      {
        dataType: 'json',
        method: 'post',
        data: {
          service_id: '162164',
          entity_name: ctx.user.username,
          latitude: body.latitude,
          longitude: body.longitude,
          loc_time: body.loc_time,
          coord_type_input: 'bd09ll',
          ak: 'HcoLVpjPIvkw3OeriFV2PopkSBtNtOEz',
        },
      }
    );
    console.log('result', result.data);
    return result.data;
  }
}
module.exports = MapService;
