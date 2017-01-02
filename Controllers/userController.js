(function (userController){

  userController.init = function (app){

    app.get("/api/users", function(req,res){
       res.set("Content-Type", "application/json");
       res.send({name: "Schmidt", isValid: true, group: "Admin"})
    });

  };

})(module.exports);
