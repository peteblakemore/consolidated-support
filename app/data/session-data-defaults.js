/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

var _ = require('underscore');
var articles = require('../views/articles.json')

module.exports = {

  'employer-articles': articles.filter( function(article) {
  	return _.contains(article.user, 'employer')
  }),

  'training-provider-articles': articles.filter( function(article) {
  	return _.contains(article.user, 'training provider')
  })

}
