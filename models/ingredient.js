module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT
    }
  });

  return Ingredient;
};