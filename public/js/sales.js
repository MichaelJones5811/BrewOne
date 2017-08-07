$.get("/api/recipe", function(req) {
    console.log(req);
    for (var i = 0; i < req.length; i++) {
        $("#beerType").append("<option value='" + req[i].item + "'>" + req[i].item + "</option>");
    }
});

$("#submit-sales").on("click", function() {
    var chosenItem = $("#beerType").val().trim();
    var pintsSold = $("#pintsSold").val().trim();
    var ingredientAdjust = {};
    $.get("/api/recipe", function(request) {
        for (var i = 0; i < request.length; i++) {
            if (request[i].item === chosenItem) {
                if (request[i].ingredient_one != null) {
                    var ingredientOneAdjust = (request[i].quantity_one / 165) *  pintsSold;
                    console.log(ingredientOneAdjust);
                    ingredientAdjust[request[i].ingredient_one] =
                }
            }
        }
    });
}) ;


//Equation:
// Ingredient Qty Sold(lbs) = (Recipe Qty(in lbs per keg) / 165 (pints per keg)) * # pints sold

//Example:
// 500 Pints of Porter sold in one week, how much pale malt was sold?
// 29.45 lbs of Malt are needed to make one keg of porter

// (29.45/165)*500 = 89.24
