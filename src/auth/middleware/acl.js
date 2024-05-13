'use strict';

module.exports = (capability) => {
  console.log('checking perms', capability);

  return (req, res, next) => {
    const acl = {
      customer: ['read', 'create'],
      mechanic: ['read', 'create', 'update'],
      admin: ['read', 'create', 'update', 'delete']
    };

    try {
      if (acl[req.user.dataValues.role].includes(capability)) {
        next();
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('Invalid Login');
    }

  }

}
