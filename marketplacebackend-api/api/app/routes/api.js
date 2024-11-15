
let router = require('express').Router(),
productController = require('../controllers/product.controller')
userController = require('../controllers/user.controller'),
categorieController = require('../controllers/categorie.controller'),
subcategorieController = require('../controllers/sub_categorie.controller')
userController = require('../controllers/user.controller')
orderController = require('../controllers/order.controller')
accountController = require('../controllers/account.controller')



let apiRouters = function (passport) {

        router.get('/api/user/find', userController.find);
        router.get('/api/user/findById/:entity_id', passport.authenticate('jwt', {session: false}), userController.findById);
        router.put('/api/user/update', passport.authenticate('jwt', {session: false}), userController.update);
        router.delete('/api/user/delete/:params', passport.authenticate('jwt', {session: false}), userController.delete);
        router.post('/api/user/save', passport.authenticate('jwt', {session: false}), userController.save);
       
        router.post('/api/product/find', productController.find);
        router.get('/api/product/findById/:entity_id', productController.findById);
        router.put('/api/product/update', productController.update);
        router.delete('/api/product/delete/:params', productController.delete);
        router.post('/api/product/save', productController.save);
        
        router.post('/api/categorie/find', categorieController.find);
        router.get('/api/categorie/findById/:entity_id',  categorieController.findById);
        router.put('/api/categorie/update',categorieController.update);
        router.delete('/api/categorie/delete/:params',  categorieController.delete);
        router.post('/api/categorie/save', categorieController.save);
        //order
        router.post('/api/order/find', orderController.find);
        router.get('/api/order/findById/:entity_id', orderController.findById);
        router.put('/api/order/update', orderController.update);
        router.delete('/api/order/delete/:params',  orderController.delete);
        router.post('/api/order/save', orderController.save);
        //account
        router.post('/api/account/find', accountController.find);
        router.get('/api/account/findById/:entity_id', accountController.findById);
        router.put('/api/account/update', accountController.update);
        router.delete('/api/account/delete/:params',  accountController.delete);
        router.post('/api/account/save', accountController.save);
        router.post('/api/account/saveAc', accountController.saveAc);


        router.get('/api/sub_categorie/find',subcategorieController.find);
        router.get('/api/sub_categorie/findById/:entity_id', passport.authenticate('jwt', {session: false}), subcategorieController.findById);
        router.put('/api/sub_categorie/update', passport.authenticate('jwt', {session: false}), subcategorieController.update);
        router.delete('/api/sub_categorie/delete/:params', passport.authenticate('jwt', {session: false}), subcategorieController.delete);
        router.post('/api/sub_categorie/save', passport.authenticate('jwt', {session: false}),subcategorieController.save);

        return router;
}
module.exports = apiRouters;
