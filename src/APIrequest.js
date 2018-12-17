
// var request = new XMLHttpRequest();


// request.open('GET', 'https://content.guardianapis.com/search?api-key=075f0c45-9391-4826-9e03-45aa1550fcc9');

// request.onload = function () {

//   data = JSON.parse(request.response); // <- string
//   console.log(data.response.results)

// }

// request.send();


function APIrequest() {
  this.newsList = new NewsList();
}

APIrequest.prototype.returnRequest = function(callback) {
  fetch('https://content.guardianapis.com/search?api-key=075f0c45-9391-4826-9e03-45aa1550fcc9')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    callback(myJson);
  })
}

APIrequest.prototype.getNews = function() {

  var self = this;

  self.returnRequest(function(myJson){
    var data = myJson.response;

    console.log(data.results[0].webTitle);
    console.log(self.newsList);

    for (var i = 0; i < data.results.length; i++) {
      self.newsList.createNews(data.results[i].webTitle);
    }
  })
};