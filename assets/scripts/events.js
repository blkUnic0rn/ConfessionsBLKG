'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const postConfession = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createConfession(data)
    .then(ui.onCreateConfessionSuccess)
    .catch(ui.onCreateConfessionFailure)
}

const loadConfessions = () => {
  api.getConfessions()
    .then(ui.getConfessionsSuccess)
    .catch(ui.getConfessionsFailure)
}

const addHandlers = () => {
  $('#sendConfession').on('submit', postConfession)
  loadConfessions()
}

module.exports = {
  addHandlers
}
