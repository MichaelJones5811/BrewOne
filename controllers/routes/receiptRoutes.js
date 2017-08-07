var db = require("../../models");

module.exports = function(app) {
    //find all the entrys in the reciept db
    app.get("/api/receipt", function(req, res) {
    db.receipt.findAll().then(function(brew_db) {
      res.json(brew_db);
    });
});//end of find all
  // update quanity
  app.post("api/updatevalues/:id",function(req,res){
    db.receipt.findOne({
      where: {
        id: req.params.id
      }.then(db.receipt.increment("quantity",{by: req.value}))
    })

  });
  //Create Reciept of goods for a user
	app.post("/api/newreceipt", function(req, res) {
    
    db.Receipt.create({
      ingredient: req.body.ingredient,
      quantity: req.body.quantity,
      
    });

  });//end of create

    

}//end of exports