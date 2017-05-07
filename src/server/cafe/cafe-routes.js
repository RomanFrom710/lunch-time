'use strict';

const router = require('koa-router')();

const config = require('../config');
const authMiddlewares = require('../auth/middleware');
const cafeService = require('./cafe-service');


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
    })
    .post(config.get('links:cafe:price:add'), authMiddlewares.userOnly, async context => {
        const priceDto = context.request.body;
        priceDto.cafeId = context.params.id;
        priceDto.user = context.state.user.id;
        context.body = await cafeService.addPriceInfo(priceDto);
    });


module.exports = router.routes();
