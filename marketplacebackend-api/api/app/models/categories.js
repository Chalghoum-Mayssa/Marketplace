module.exports = (sequelize, Sequelize) => {
    const categorie = sequelize.define("categories", {
            categorie_id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            slug: {
            
                type: Sequelize.STRING
            },
            description: {
            
                type: Sequelize.STRING
            },
            e_file_categorie: {
            
                type: Sequelize.INTEGER
            },
           categorie_title: {
            
                type: Sequelize.STRING
            },
            //associate: function(models) {
            //    categorie.hasMany(models.Product, { onDelete: 'cascade' });
            //};

        },
        {timestamps: false,}
    );
 
    categorie.prototype.fields = [
        "categorie_id",
        "slug",
        "description",
        "e_file_categorie",
        "categorie_title"
    ];

    categorie.prototype.fieldsSearchMetas = [
        "categorie_id",
    ];



    return categorie;
};