const {baseModelbo} = require('./basebo');


class productbo extends baseModelbo {
    constructor() {
        super('products', 'product_id');
        this.baseModal = 'products';
        this.primaryKey = 'product_id';
    }

}

module.exports = productbo;