'use strict';

const Uri = require('urijs');
// This helper looks deeply through the object, finds prefix
// properties and adds their values to links.

const prefixName = 'prefix';

function deepResolve(links, currentBase) {
    if (typeof(links) === 'string') {
        if (links.length) {
            currentBase.segment(links);
        }
        return currentBase.normalize().toString();
    }

    if (typeof(links) === 'object') {
        const newLinksObject = {};

        if (links[prefixName]) {
            currentBase.segment(links[prefixName]);
        }

        Object.keys(links).forEach(key => {
            if (key === prefixName) {
                newLinksObject[key] = links[key];
            } else {
                newLinksObject[key] = deepResolve(links[key], currentBase.clone());
            }
        });

        return newLinksObject;
    }

    return links; // It's neither object nor string.
}

function resolveLinks(links, endpoints) {
    const baseUrl = new Uri(endpoints.apiurl).port(endpoints.apiport);

    return {
        full: deepResolve(links, baseUrl),
        relative: deepResolve(links, new Uri('/'))
    };
}

module.exports = resolveLinks;
