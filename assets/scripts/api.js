'use strict'

const config = require('./config')

const createConfession = (data) => {
  return $.ajax({
    url: config.apiUrl + '/requests',
    method: 'POST',
    data: data
  })
}

const getConfessions = () => {
  return $.ajax({
    url: config.apiUrl + '/confessions',
    method: 'GET'
  })
}

module.exports = {
  createConfession,
  getConfessions
}
