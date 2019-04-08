const express = require('express')
const router = express.Router()

var _ = require('underscore');
var Fuse = require('fuse.js');
var articles = require('./views/articles.json')

// Add your routes here - above the module.exports line

module.exports = router

router.get('/index', (req, res) => {
	res.redirect('/')
})

router.get('/', (req, res) => {
	res.render('index')
})

router.post('/search', (req, res) => {
	var options = {
		threshold: 0.3,
		keys:
		[{
			name: 'title',
			weight: 0.6
		},
		{
			name: 'synopsis',
			weight: 0.4
		}]
	}
	var fuse = new Fuse(articles, options)
	var searchQuery = req.session.data['search']

	req.session.data['search-results'] = fuse.search(searchQuery)

	res.redirect('search')
})
