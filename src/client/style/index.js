// Webpack doesn't understand css entry points, so we need this file
// for compiling common styles into separate file.
//todo: this file should not be included in script tag

require('./vendor.less');
require('./common-styles.less');
