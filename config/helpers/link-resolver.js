'use strict';

// This helper looks deeply through the object, finds prefix
// properties and adds their values to links.

const separator = '/';
const prefixName = 'prefix';

function deepResolve(links, currentPrefix) {
    if (typeof(links) === 'string') {
        return links.length ? // Do not add trailing slash
            (currentPrefix + separator + links) : currentPrefix;
    }

    if (typeof(links) === 'object') {
        const newLinksObject = {};

        currentPrefix += separator + links[prefixName];

        Object.keys(links).forEach(key => {
            if (key === prefixName) {
                newLinksObject[key] = links[key];
            } else {
                newLinksObject[key] = deepResolve(links[key], currentPrefix);
            }
        });

        return newLinksObject;
    }

    return links; // It's neither object nor string.
}

function resolveLinks (linksObject) {
    return deepResolve(linksObject, '');
}

module.exports = resolveLinks;
