const {baseModelbo} = require('./basebo');

class sub_categoriebo extends baseModelbo {
    constructor() {
        super('sub_categories', 'sub_categorie_id');
        this.baseModal = 'sub_categories';
        this.primaryKey = 'sub_categorie_id';
        
        
    }

}

module.exports = sub_categoriebo;