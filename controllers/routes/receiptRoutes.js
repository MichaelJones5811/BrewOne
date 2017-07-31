var db = require("../../models");

module.exports = function(app) {
    //find all the entrys in the reciept db
    app.get("/api/receipt", function(req, res) {
    db.receipt.findAll().then(function(brew_db) {
      res.json(brew_db);
    });
});//end of find all
  
    

}//end of exports