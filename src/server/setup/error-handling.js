'use strict';


module.exports = function (app) {
    app.use(async (context, next) => {
        try {
            await next();
        } catch (err) {
            if (err.status && err.status < 500) {
                context.status = err.status;
                context.body = { error: err.message };
            } else {
                context.status = 500; // Better to keep it in secret for the user
                context.body = { error: 'Server error' };
                console.error(err);
            }
        }
    });
};
