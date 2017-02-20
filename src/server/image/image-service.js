'use strict';

const PassThrough = require('stream').PassThrough;
const path = require('path');

const cloudinary = require('cloudinary');


// todo: finish this service
exports.upload = function (imageBuffer) {
    return new Promise(function (resolve) {
        const originalImageStream = cloudinary.uploader.upload_stream(function (result) {
            resolve(result);
        });
        writeBufferToStream(imageBuffer, originalImageStream);
    });
};

function writeBufferToStream(buffer, stream) {
    const bufferStream = new PassThrough();
    bufferStream.end(buffer);
    bufferStream.pipe(stream);
}
