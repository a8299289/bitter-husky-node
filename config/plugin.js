'use strict';


module.exports = {
	//数据库中间件
	sequelize:{
    enable: true,
    package: 'egg-sequelize',
  },
  //跨域处理
  cors: {
	  enable: true,
	  package: 'egg-cors'
	}
	
}
