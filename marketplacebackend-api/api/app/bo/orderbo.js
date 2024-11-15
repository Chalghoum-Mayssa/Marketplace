const {baseModelbo} = require('./basebo');

class orderbo extends baseModelbo {
    constructor() {
        super('orders', 'order_id');
        this.baseModal = 'orders';
        this.primaryKey = 'order_id';
    }

}

module.exports = orderbo;
