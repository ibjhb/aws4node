/*
 * Copyright 2013. Gulf to Bay Trading Company LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Load the AWS credentials
AWS.config.loadFromPath('../config.json');

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket
s3.createBucket({
	Bucket: 'aws4node-bucket-' + uuid.v4()
}, function(err, data){
	if (err) {
		throw err;
	}

	console.log('------- data : ', data);

	var params = {Bucket: data.Location, Key: 'aws4node-object-' + uuid.v4(), Body: 'Hello world! ' + uuid.v4()};
	s3.putObject(params, function(err, data) {
		if (err) {
			throw err;
		}
	});

	return data;
});