module.exports = function(app, passport) {

    app.get("/inventoryadjust", function(req, res) {
        res.render("inventoryadjust");
    });

    app.get("/receipts", function(req, res) {
        res.render("receipts");
    });

    app.get("/sales", function(req, res) {
        res.render("sales");
    });

    app.get("/vendor", function(req, res) {
        res.render("vendor");
    });

    app.get("/beers", function(req, res) {
        res.render("beers");
    });

    app.get("/dashboard", function(req, res) {
        res.render("dashboard")
    })
}