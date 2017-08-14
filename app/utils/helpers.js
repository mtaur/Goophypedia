// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {
  // Returns a promise object we can .then() off inside our Parent component
  getGifs: function() {
    return axios.get("/api");
  },

  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  searchGifs: function(searchObj) {
    console.log(searchObj,'from axios');
//    let data = searchObj;
//    data.stateFcn =  console.log;//stateFcn;
      return axios.post("/imgapi", searchObj);
  },

  searchArticle: function(searchObj) {
    return axios.post("/api", searchObj);
  }

};

