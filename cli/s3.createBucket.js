// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Load the AWS credentials
AWS.config.loadFromPath('../config.json');

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket
s3.createBucket({
	Bucket: 'aws4node-' + uuid.v4()
}, function(err, data){
	if (err) {
		throw err;
	}

	console.log(data);

	return data;
});