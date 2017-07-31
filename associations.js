module.exports = function(db) {
    //ingredient belongs to recipe belongs to user routes
  db.Ingredient.belongsTo(db.Recipe, { foreignKey: { allowNull: false } });
  db.Recipe.hasMany(db.Ingredient, { onDelete: "cascade" });
  //Sales belongs to Onhand routes
  db.Sales.belongsTo(db.OnHand, { foreignKey: { allowNull: false } });
  db.OnHand.hasMany(db.Sales, { onDelete: "cascade" });
  //Team belongs to user routes
  db.Receipt.belongsTo(db.OnHand, { foreignKey: { allowNull: false } });
  db.OnHand.hasMany(db.Receipt, { onDelete: "cascade" });
}