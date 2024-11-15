const {baseModelbo} = require('./basebo');

class categoriebo extends baseModelbo {
    constructor() {
        super('categories', 'categorie_id');
        this.baseModal = 'categories';
        this.primaryKey = 'categorie_id';
        
        
    }

}

module.exports = categoriebo;