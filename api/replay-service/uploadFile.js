'use strict';

const { tryParse } = require('serverless-helpers/responses');

const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const w3g = require('w3g');

module.exports.handler = (event, context, callback) => {
  const { fileName, fileData, fileType } = tryParse(event.body);

  const base64Data = fileData.split(';base64,').pop();
  const buf = new Buffer(base64Data, 'base64');
  const bucketKey = `wc3replays-${uuidv1()}.w3g`;

  const payload = {
    Bucket: process.env.REPLAY_BUCKET,
    Key: bucketKey,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: fileType,
    ContentDisposition: `filename=${fileName || bucketKey}`,
  };

  S3.putObject(payload, (err, data) => {
    if (err) {
      console.log('Error uploading data: ', err);
    }

    const params = {
      Bucket: process.env.REPLAY_BUCKET,
      Key: bucketKey,
    };

    S3.getObject(params, (err2, getObjResponse) => {
      const tempFile = `/tmp/${bucketKey}`;

      fs.writeFileSync(tempFile, getObjResponse.Body)

      const response = {
        statusCode: err ? 500 : 200,
        body: JSON.stringify({
          bucketKey,
          fileName,
          err,
          replay: new w3g(tempFile),
        }),
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      };

      callback(null, response);

      fs.unlink(tempFile, (err) => {
        if (err) {
          console.log('err', err);
        }
      });
    })

  });
};
