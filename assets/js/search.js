document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length > 0) {
      fetch('/search.json')
        .then(response => response.json())
        .then(data => {
          const results = data.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query)
          );

          results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.url;
            a.textContent = result.title;
            li.appendChild(a);
            searchResults.appendChild(li);
          });
        });
    }
  });
});
