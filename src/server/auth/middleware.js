'use strict';

const userEnums = require('../user/user-enums');


exports.userOnly = async (context, next) => {
    if (context.isAuthenticated()) {
        await next();
    } else {
        context.throw(401);
    }
};

exports.adminOnly = async (context, next) => {
    if (!context.isAuthenticated()) {
        context.throw(401);
    }

    const user = context.state.user;
    if (user.userType === userEnums.userType.admin) {
        await next();
    } else {
        context.throw(403, 'For admins only');
    }
};

exports.anonOnly = async (context, next) => {
    if (!context.isAuthenticated()) {
        await next();
    } else {
        context.throw(400, 'You are already authenticated!');
    }
};
