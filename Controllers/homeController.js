(function (homeController){

  var data = require("../Data");

  homeController.init = function (app){

    app.get("/", function(req, res){
        data.getNoteCategories(function(err, results){
          res.render("index", {title: "Express + Vash", error: err, categories: results});
        });
    });

    app.post("/newCategory", function(req, res){
      var categoryName = req.body.categoryName;
    });

  };

})(module.exports);
