'use strict';

const { tryParse } = require('serverless-helpers/responses');

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.handler = (event, context, callback) => {
  const { bucketKey, fileName } = tryParse(event.body);

  const params = {
    CopySource: `${process.env.REPLAY_BUCKET}/${bucketKey}`,
    Key: bucketKey,
    Bucket: process.env.REPLAY_BUCKET,
    ContentDisposition: `filename=${fileName}`,
    ContentEncoding: 'base64',
    MetadataDirective: 'REPLACE'
  };

  S3.copyObject(params, (err, data) => {
    const response = {
      statusCode: err ? 500 : 200,
      body: JSON.stringify({
        err,
      }),
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };

    callback(null, response);
  });
};
