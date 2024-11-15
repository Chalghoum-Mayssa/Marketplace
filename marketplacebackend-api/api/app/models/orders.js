module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("orders", {
            order_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            consumer: {

                type: Sequelize.STRING
            },
            product_name: {

                type: Sequelize.STRING
            },
            order_date: {

                type: Sequelize.DATE
            },
            delivery_date: {

                type: Sequelize.DATE
            },
            payment_method: {

                type: Sequelize.STRING
            },
            amount: {

                type: Sequelize.FLOAT
            },
            active: {

                type: Sequelize.STRING
            },
        },
        {timestamps: false,}
    );
    order.prototype.fields = [
        "order_id",
        "consumer",
        "product_name",
        "order_date",
        "delivery_date",
        "payment_method",
        "amount",
        "active"
    ];
    return order;
};
