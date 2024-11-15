const {baseModelbo} = require('./basebo');
const { Op } = require("sequelize");
class accountbo extends baseModelbo {
    constructor() {
        super('accounts', 'account_id');
        this.baseModal = 'accounts';
        this.primaryKey = 'account_id';
    }

    savAccount(req, res, next) {
     const {account_code, first_name, last_name, company, address, country, city, tel, mobile, email, active,status,role_id,user_id,lang} =req.body;


        if (!!!account_code || !!!email ) {
            return res.status(400).json({ message: "invalid data" });
        }
        const newAccount = {
            account_code,
            first_name,
            last_name,
            company,
            address,
            country,
            city,
            tel,
            mobile,
            email,
            active,
            status,
            created_at,
            updated_at,
            role_id,
            user_id,
            lang
        };
        this.db['accounts'].findOne({
            where: {
                [Op.or]: [
                    {account_code: account_code},
                    {email:email},
                    {active: 'Y'}
                    ],
            }
        }).then(account_data => {
            if (account_data) {
                return res.send({
                    status: 200,
                    data: null,
                    message: 'account already exist'
                })
            }
            let modalObj = this.db[this.baseModal].build(newAccount);

            modalObj.save().then(result => {
                return res.send({
                    status: 200,
                    data: account_data,
                    message: 'account ajouté avec success'
                });

            }).catch(err => {
                return this.sendResponseError(res, ['an error has occured'], err)
            });


        });

}
}
module.exports = accountbo;
