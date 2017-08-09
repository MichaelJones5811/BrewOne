alert("hello world");
$.get("/api/vendors", function(req) {
    console.log(req);
    for (var i = 0; i < req.length; i++) {
        $("#vendor-input").append("<option value='" + req[i].id + "'>" + req[i].vendorname + "</option>");
    }
});