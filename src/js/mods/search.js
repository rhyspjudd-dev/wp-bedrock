var searchmanager = {
    
    // search: function () {
    //         const searchInput = document.getElementById('search-input');
    //         const searchResults = document.getElementById('search-results');

    //         searchInput.addEventListener('input', function() {
    //           const searchQuery = this.value;
    //             alert('hola')
    //           fetch('/wp-json/wp/v2/posts?search=' + encodeURIComponent(searchQuery))
    //             .then(response => response.json())
    //             .then(data => {
    //               // Clear previous results
    //               searchResults.innerHTML = '';
                    
    //               if (data.length > 0) {
    //                 // Display search results
    //                 data.forEach(post => {
    //                   const resultItem = document.createElement('div');
    //                   resultItem.textContent = post.title.rendered;
    //                   searchResults.appendChild(resultItem);
    //                   alert('Display search results')
    //                 });
    //               } else {
    //                 // Display no results message
    //                 const noResults = document.createElement('div');
    //                 noResults.textContent = 'No results found.';
    //                 searchResults.appendChild(noResults);
    //               }
    //             })
    //             .catch(error => {
    //               console.error('Search request failed: ' + error);
    //             });
    //         });
          
    // }

    togglesearchvisabiltiy: function () {
      // Get the elements
      const searchIcon = document.querySelector('.search-ico');
      const searchContainer = document.querySelector('.search-container');

      // Add click event listener
      searchIcon.addEventListener('click', function() {
        // Toggle visibility of the search container
        if (searchContainer.style.display === 'none') {
          searchContainer.style.display = 'flex';
        } else {
          searchContainer.style.display = 'none';
        }
      });
    }

}

export default searchmanager;