'use strict'

const config = require('./config')

const createConfession = (data) => {
  return $.ajax({
    url: config.apiUrl + '/confessions',
    method: 'POST',
    data: data
  })
}

module.exports = {
  createConfession
}
