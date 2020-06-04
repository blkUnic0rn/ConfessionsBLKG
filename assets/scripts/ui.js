'use strict'

const showConfessions = require('./templates/confessionsList.handlebars')

const onCreateConfessionSuccess = function (response) {
  $('#messageboard').text('Thank You For Your Submission!')
  $('#confessionsSubmission').trigger('reset')
  setTimeout(() => $('#messageboard').text(' '), 2000)
  setTimeout(() => $('#confessionsModal').modal('hide'), 2000)
}

const onCreateConfessionFailure = function (response) {
  $('#messageboard').text('There was an error sending your confession. Please try again later')
  $('#confessionsSubmission').trigger('reset')
  setTimeout(() => $('#messageboard').text(' '), 2000)
  setTimeout(() => $('#confessionsModal').modal('hide'), 2000)
}

const getConfessionsSuccess = (data) => {
  const confessionsList = showConfessions({
    confessions: data.confessions
  })
  $('#confessionsList').html(confessionsList)
}

const getConfessionsFailure = () => {
  // something
}

module.exports = {
  onCreateConfessionSuccess,
  onCreateConfessionFailure,
  getConfessionsSuccess,
  getConfessionsFailure
}
