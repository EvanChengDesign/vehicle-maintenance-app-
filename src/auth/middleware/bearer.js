'use strict';

const { users } = require('../models')

module.exports = async (req, res, next) => {

  try {
    console.log('bearer started')

    if (!req.headers.authorization) { console.log('auth header empty'); _authError() }

    console.log('header:', req.headers.authorization)
    const token = req.headers.authorization.split(' ').pop();
    console.log('token:', token)
    req.user = await users.authenticateToken(token);
    next();
  } catch (e) {
    _authError();
  }

  function _authError() {
    next('Invalid Login');
  }
}
