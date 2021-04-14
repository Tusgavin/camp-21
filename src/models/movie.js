module.exports = (sequelize, DataTypes) => {
   const Movie = sequelize.define(
      "Movie",
      {
         name: {
            type: DataTypes.STRING,
            allowNull: false
         },
         genre: DataTypes.STRING,
         description: DataTypes.STRING,
         createdAt: {
            type: DataTypes.DATE,
            field: "created_at"
         },
         updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at"
         }
      },
      {
         tableName: "movies"
      }
   );

   return Movie;
};