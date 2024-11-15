module.exports = (sequelize, Sequelize) => {
    const account = sequelize.define("accounts", {
            account_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            account_code: {

                type: Sequelize.STRING
            },
            first_name: {

                type: Sequelize.STRING
            },
            last_name: {

                type: Sequelize.STRING
            },
            company: {

                type: Sequelize.STRING
            },
            address: {

                type: Sequelize.STRING
            },
            country: {

                type: Sequelize.STRING
            },
            city: {

                type: Sequelize.STRING
            },
            tel: {

                type: Sequelize.STRING
            },
            mobile: {

                type: Sequelize.STRING
            },
            email: {

                type: Sequelize.STRING
            },
            active: {

                type: Sequelize.STRING
            },
            status: {

                type: Sequelize.STRING
            },
            created_at: {

                type: Sequelize.STRING
            },
            updated_at: {

                type: Sequelize.STRING
            },
            role_id: {

                type: Sequelize.STRING
            },
            user_id: {

                type: Sequelize.STRING
            },
            lang: {

                type: Sequelize.STRING
            },
        },
        {timestamps: false,}
    );
    account.prototype.fields = [
        "account_id",
        "account_code",
        "first_name",
        "last_name",
        "company",
        "address",
        "country",
        "city",
        "tel",
        "mobile",
        "email",
        "active",
        "status",
        "created_at",
        "updated_at",
        "role_id",
        "user_id",
        "lang"
    ];
    return account;
};

