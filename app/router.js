'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/members/save', controller.members.save);
  router.get('/members/info', controller.members.info);
  
};
