'use strict';

const _ = require('lodash');


// This method is needed because somewhy mongoose prefers to return _id
// instead of id to the client. But _id appearing (which is a sort of db
// implementation detail) in browser is not a good idea. DAL is the only place
// where _id reference is appropriate. So this transform will allow us to
// remove some redundant mappings from repo code.
// The same thing is related to __v property.
exports.applyRemovePrivateFieldsTransform = function (schema) {
    addTransform(schema, function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    });
};

// We store get coords like an array in db. But for client it's more
// preferable to get it like a nice object. The same thing is for
// getting geo info from client.
exports.getGeoFieldDescriptor = function (sourceDescriptor) {
    sourceDescriptor = sourceDescriptor || {};

    sourceDescriptor.type = [Number];
    sourceDescriptor.index = '2d';
    sourceDescriptor.get = dbValue => { return { latitude: dbValue[0], longitude: dbValue[1] } };
    sourceDescriptor.set = inputValue => [inputValue.latitude, inputValue.longitude];

    return sourceDescriptor;
};


function addTransform(schema, transform) {
    let oldTransfrom = null;

    schema.options.toJSON = schema.options.toJSON || {};
    if (_.isFunction(schema.options.toJSON.transform)) {
        oldTransfrom = schema.options.toJSON.transform;
    }

    schema.options.toJSON.transform = function (doc, ret) {
        oldTransfrom && oldTransfrom.call(this, doc, ret);
        transform.call(this, doc, ret);
    };
}
