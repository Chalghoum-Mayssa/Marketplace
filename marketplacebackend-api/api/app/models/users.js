module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("users", {
            user_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },

        },
        {timestamps: false,}
    );

    user.prototype.fields = [
        "account_id"
    ];

    user.prototype.fieldsSearchMetas = [
        "user_id",
    ];



    return user;
};
