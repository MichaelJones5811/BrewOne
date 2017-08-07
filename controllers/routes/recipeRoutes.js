var db = require("../../models");

module.exports = function(app) {
    app.get("/api/recipe", function(req, res) {
    db.recipe.findAll().then(function(brew_db) {
      res.json(brew_db);
    });
});//end of find all
  // 
  
  //Create Recipe of goods for a user
	app.post("/api/addrecipe", function(req, res) {
    db.recipe.create({
      item: req.body.item,
      ingredient_one: req.body.ingredientone,
      ingredient_two: req.body.ingredienttwo,
      ingredient_three: req.body.ingredientthree,
      ingredient_four: req.body.ingredientfour,
      ingredient_five: req.body.ingredientfive,
      ingredient_six: req.body.ingredientsix

      
    });

  });//end of create

    

}//end of exports

