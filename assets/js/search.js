---
layout: null
---

document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");

  fetch("/search.json")
    .then((response) => response.json())
    .then(function (data) {
      var index = lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("content");

        data.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      searchInput.addEventListener("input", function () {
        var query = searchInput.value;
        searchResults.innerHTML = "";

        if (query) {
          var results = index.search(query);
          results.forEach(function (result) {
            var item = data.find(function (doc) {
              return doc.url === result.ref;
            });

            searchResults.innerHTML +=
              '<li><a href="' + item.url + '">' + item.title + "</a></li>";
          });
        }
      });
    });
});
