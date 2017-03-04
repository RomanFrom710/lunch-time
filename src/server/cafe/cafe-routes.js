'use strict';

const router = require('koa-router')();
const multer = require('koa-router-multer');

const config = require('../config');
const authMiddlewares = require('../auth/middleware');
const cafeService = require('./cafe-service');
const imageService = require('../image/image-service');


const multerMiddleware = multer({ storage: multer.memoryStorage() }).single('photo');

router
    .get(config.get('app:links:cafe:coords'), async context => {
        context.body = await cafeService.getAllCafeCoords();
    })
    .get(config.get('app:links:cafe:one:get'), async context => {
        const id = context.params.id;
        context.body = await cafeService.findById(id);
    })
    .get(config.get('app:links:cafe:getAll'), async context => {
        const query = {
            page: +context.query.page,
            itemsPerPage: +context.query.itemsPerPage
        };

        context.body = await cafeService.getAllCafes(query);
    })
    .post(config.get('app:links:cafe:one:image'), authMiddlewares.adminOnly, multerMiddleware, async context => {
        context.throw(500); // todo: finish image uploading
    })
    .post(config.get('app:links:cafe:add'), authMiddlewares.adminOnly, async context => {
        const cafe = context.request.body;
        context.body = await cafeService.createCafe(cafe);
    });


module.exports = router.routes();
