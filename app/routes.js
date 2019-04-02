const express = require('express')
const router = express.Router()

var _ = require('underscore');
var Fuse = require('fuse.js');
var articles = require('./views/articles.json')

// Add your routes here - above the module.exports line

module.exports = router

// search
router.get('/', (req, res) => {
	req.session.data['articles'] = articles

	req.session.data['employer-articles'] = articles.filter( function(article) {
		return _.contains(article.user, 'employer')
	})

	req.session.data['training-provider-articles'] = articles.filter( function(article) {
		return _.contains(article.user, 'training provider')
	})

	res.render('index')
})

router.post('/search', (req, res) => {
	var options = {
		keys: ['title', 'synopsis']
	}
	var fuse = new Fuse(articles, options)
	var searchQuery = req.session.data['search']

	req.session.data['search-results'] = fuse.search(searchQuery)

	res.redirect('search')
})
