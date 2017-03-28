// grab the mongoose module
var mongoose = require('mongoose');

// define our schema
var quoteSchema = new mongoose.Schema({
				quote : {type : String, default: ''},
				
});

quoteSchema.set('collection', 'quotes');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('steve_jobs(1)', quoteSchema);
