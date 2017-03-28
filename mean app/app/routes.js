module.exports = function(app) {

	var mongoose = require('mongoose');
	var Quote      = require('./models/Quote');
	var db       = require('../config/db');


 //Search quotes	

app.get('/qoute', function(req, res) {
				 if(mongoose.connection.readyState != 1) {
							mongoose.connect(db.url);
					}
				 mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
				 var word = request.params.word;
				 Quote.find({'Qoutes' : new RegExp(word, 'i')}, function(err, quotes) {
								if (err) {
											throw err;
								}
								return res.render('quote', {quotes:word});
					});
});


	// Get save form for new quote
	app.get('/add', function(req, res) {
					res.render('add');
	});

 // Save new quote
	app.post('/add', function(req, res) {
		  if(mongoose.connection.readyState != 1) {
				  mongoose.connect(db.url);
		  }
				var quote = new Quote({quote: req.body.quote});
				quote.save(function (err, c) {
					  if (err) {
										throw err;
							}
					  return res.redirect('/index');
				});
	});
};