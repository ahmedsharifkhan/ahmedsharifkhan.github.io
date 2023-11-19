---
layout: null
sitemap: false
---

document.addEventListener('DOMContentLoaded', function () {
  var index = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('content');
    this.ref('id');
  });

  {% assign count = 0 %}
  {% for post in site.posts %}
    index.add({
      title: {{ post.title | jsonify }},
      content: {{ post.content | jsonify }},
      id: {{ count }}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}

  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function () {
    var query = this.value;
    var results = index.search(query);

    searchResults.innerHTML = '';

    if (results.length > 0) {
      results.forEach(function (result) {
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.href = '{{ site.baseurl }}{{ site.posts[result.ref].url }}';
        link.textContent = '{{ site.posts[result.ref].title }}';
        item.appendChild(link);
        searchResults.appendChild(item);
      });
    } else {
      searchResults.innerHTML = 'No results found';
    }
  });
});
