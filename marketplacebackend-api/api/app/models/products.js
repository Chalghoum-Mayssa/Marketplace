module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("products", {
            product_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            product_title: {
                type: Sequelize.STRING
            },
            product_description: {
                type: Sequelize.STRING
            },
            category_id: {
                type: Sequelize.INTEGER
            },
            active: {
                type: Sequelize.STRING
            },
            efile: {
                type: Sequelize.JSON
            },
            custom_fields: {
                type: Sequelize.JSONB
            },
            //associate: function(models){
            //    product.belongsTo(models.categories);
            //}
        },
        {timestamps: false,}
    );
    product.prototype.fields = [
        "product_id",
        "product_title",
        "product_description",
        "category_id",
        "active",
        "efile",
        "custom_fields"
    ];

    product.prototype.fieldsSearchMetas = [
        "product_id",
    ];
    return product;
};
