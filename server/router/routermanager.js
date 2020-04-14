const homerouter = require("./homerouter"),
  aboutrouter = require("./aboutrouter"),
  portfoliorouter = require("./portfoliorouter"),
  readmorerouter = require("./readmorerouter");

module.exports = function(app){
  app.use("/", homerouter);
  app.use("/readmore", readmorerouter);
  app.get("/about", aboutrouter);
  app.use("/portfolio", portfoliorouter);    
};
