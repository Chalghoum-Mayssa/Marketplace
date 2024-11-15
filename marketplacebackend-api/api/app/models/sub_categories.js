module.exports = (sequelize, Sequelize) => {

    
    const sub_categorie = sequelize.define("sub_categories", {
            sub_categorie_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            categorie_id: {
                type: Sequelize.INTEGER
            },
          
          
            description: {
            
                type: Sequelize.STRING
            },
           sub_categorie_tilte: {
            
                type: Sequelize.STRING
            },
 
 

        },
        {timestamps: false,}
    );
 
    sub_categorie.prototype.fields = [
        "sub_categorie_id",
        "categorie_id",
        "sub_categorie_title",
        "description"
    ];

    sub_categorie.prototype.fieldsSearchMetas = [
        "sub_categorie_id",
    ];



    return sub_categorie;
};
