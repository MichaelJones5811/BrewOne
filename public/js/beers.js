
getIngredients();


$("#submitBeer").on("click", function() {
    var beerName = $("#beerName").val().trim();
    var ingredientOne = $("#ingredient1").val().trim();
    var qtyOne = $("#qt1").val().trim();
    var ingredientTwo = $("#ingredient2").val().trim();
    var qtyTwo = $("#qt2").val().trim();
    var ingredientThree = $("#ingredient3").val().trim();
    var qtyThree = $("#qt3").val().trim();
    var ingredientFour = $("#ingredient4").val().trim();
    var qtyFour = $("#qt4").val().trim();
    var ingredientFive = $("#ingredient5").val().trim();
    var qtyFive = $("#qt5").val().trim();
    var ingredientSix = $("#ingredient6").val().trim();
    var qtySix = $("#qt6").val().trim();

    beerInfo = {
         item: beerName,
         ingredient_one: ingredientOne,
         quantity_one: qtyOne
    };
    if (ingredientTwo != "None") {
        beerInfo["ingredient_two"] = ingredientTwo;
        beerInfo["quantity_two"] = qtyTwo;
    }
    if (ingredientThree != "None") {
        beerInfo["ingredient_three"] = ingredientThree;
        beerInfo["quantity_three"] = qtyThree;
    }
    if (ingredientFour != "None") {
        beerInfo["ingredient_four"] = ingredientFour;
        beerInfo["quantity_four"] = qtyFour;
    }
    if (ingredientFive != "None") {
        beerInfo["ingredient_five"] = ingredientFive;
        beerInfo["quantity_five"] = qtyFive;
    }
    if (ingredientSix != "None") {
        beerInfo["ingredient_six"] = ingredientSix;
        beerInfo["quantity_six"] = qtySix;
    }
    console.log(beerInfo);

    createBeer(beerInfo);

});

$("#saveIngredient").on("click", function(event) {
    event.preventDefault();
    $("#ingrediantMessageDisplay").empty();
    var ingredientName = $("#ingredientName").val().trim();
    var ingredientAmount = $("#ingredientAmount").val().trim();
    var ingredientInfo = {
        ingredient: ingredientName,
        quantity: ingredientAmount
    }

    createIngredient(ingredientInfo);
});

function createBeer(info) {
    $.ajax({
      method: "POST",
      url: "/api/recipe",
      data: info
    })
    .done(function() {
        console.log("Yay Created");
        emptyForm();
    });
}

function createIngredient(info) {
    $.ajax({
      method: "POST",
      url: "/api/ingredients",
      data: info
    })
    .done(function() {
        console.log("Yay Created");
        getIngredients();
        $("#ingredientName").val("");
        $("#ingredientAmount").val("");
        $("#ingrediantMessageDisplay").html("<p>Saved! You can now select this ingredient for your recipe!</p>");
    });
}


function emptyForm() {
   $("#beerName").val("");
   $("#ingredient1").val("None");
   $("#qt1").val("");
   $("#ingredient2").val("None");
   $("#qt2").val("");
   $("#ingredient3").val("None");
   $("#qt3").val("");
   $("#ingredient4").val("None");
   $("#qt4").val("");
   $("#ingredient5").val("None");
   $("#qt5").val("");
   $("#ingredient6").val("None");
   $("#qt6").val("");
}

function getIngredients() {
    $(".ingredientType").empty();
    $(".ingredientType").append("<option value='None'>None</option>");
    $.get("/api/ingredients", function(req) {
        console.log(req);
        for (var i = 0; i < req.length; i++) {
            $(".ingredientType").append("<option value='" + req[i].ingredient + "'>" + req[i].ingredient + "</option>");
        }
    });
}
