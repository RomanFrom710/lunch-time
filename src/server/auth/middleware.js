'use strict';

const userEnums = require('../user/user-enums');


exports.userOnly = function* (next) {
    if (this.isAuthenticated()) {
        yield next;
    } else {
        this.throw(401);
    }
};

exports.adminOnly = function* (next) {
    const user = this.passport.user;
    if (user.userType === userEnums.userType.admin) {
        yield next;
    } else {
        this.throw(403, 'For admins only');
    }
};

exports.anonOnly = function* (next) {
    if (!this.isAuthenticated()) {
        yield next;
    } else {
        this.throw(400, 'You are already authenticated!');
    }
};
