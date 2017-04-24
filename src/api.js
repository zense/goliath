var WPAPI = require('wpapi')
var wp = new WPAPI({
  endpoint: window.WP_API_Settings.endpoint,
  nonce: window.WP_API_Settings.nonce
})

module.exports = wp
