'use strict'

const onCreateConfessionSuccess = function (response) {
  $('#confessionsModal').hide()
  // success message
}

const onCreateConfessionFailure = function (response) {
  // failure to post message
}

module.exports = {
  onCreateConfessionSuccess,
  onCreateConfessionFailure
}
