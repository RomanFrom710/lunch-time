'use strict';

const router = require('koa-router')();
const multer = require('koa-router-multer');

const config = require('../config');
const authMiddlewares = require('../auth/middleware');
const cafeService = require('./cafe-service');


const multerMiddleware = multer({ storage: multer.memoryStorage() }).single('photo');

router
    .get(config.get('links:cafe:coords'), async context => {
        context.body = await cafeService.getAllCafeCoords();
    })
    .get(config.get('links:cafe:one:get'), async context => {
        const id = context.params.id;
        context.body = await cafeService.findById(id);
    })
    .get(config.get('links:cafe:getAll'), async context => {
        const query = {
            page: +context.query.page,
            itemsPerPage: +context.query.itemsPerPage
        };

        context.body = await cafeService.getAllCafes(query);
    })
    .post(config.get('links:cafe:add'), authMiddlewares.adminOnly, async context => {
        const cafe = context.request.body;
        context.body = await cafeService.createCafe(cafe);
    });


module.exports = router.routes();
