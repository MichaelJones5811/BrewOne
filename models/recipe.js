module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredient_one: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredient_two: {
      type: DataTypes.STRING
    },
    ingredient_three: {
      type: DataTypes.STRING
    },
    ingredient_four: {
      type: DataTypes.STRING
    },
    ingredient_five: {
      type: DataTypes.STRING
    },
    ingredient_six: {
      type: DataTypes.STRING
    }
  });

  return Recipe;
};