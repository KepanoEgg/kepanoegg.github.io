var routingPairs = {};
(function() {
  var str = window.location + "";
  var query = str.split("?")[1];
  var queries;
  if (query != null) {
    queries = query.split("&");
    queries.forEach(function(element) {
      routingPairs[element.split("=")[0]] = element.split("=")[1];
    });
  }
})();
