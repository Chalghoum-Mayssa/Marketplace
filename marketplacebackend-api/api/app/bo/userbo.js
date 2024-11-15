const {baseModelbo} = require('./basebo');

class userbo extends baseModelbo {
    constructor() {
        super('users', 'user_id');
        this.baseModal = 'users';
        this.primaryKey = 'user_id';
    }

}

module.exports = userbo;
