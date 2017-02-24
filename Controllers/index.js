(function (controllers){

  var homeController = require("./homeController");
  var notesController = require("./notesController");
  // var userController = require("./userController");

  controllers.init = function (app){
    homeController.init(app);
    notesController.init(app);
    // userController.init(app);
  };

})(module.exports);
