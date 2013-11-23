var AWS = require('aws-sdk');
AWS.config.loadFromPath('../config.json');
var s3 = new AWS.S3();

s3.listBuckets({}, function(err, data){
	if (err) {
		throw err;
	}

	console.log(data);

	return data;
});