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
      const searchField = document.querySelector('.search-field');
      const closeSearch = document.querySelector('.close-search');

      // Add click event listener
      searchIcon.addEventListener('click', function() {
        // Toggle visibility of the search container
        if (searchContainer.style.display === 'none') {
          searchContainer.classList.remove('fade-out');
          searchContainer.style.display = 'flex';
          setTimeout(() => {
            searchField.classList.add('expanded');
          }, "250");
          setTimeout(() => {
            searchField.classList.add('expanded2x');
          }, "750");
        } else {
          searchContainer.style.display = 'none';
          searchField.classList.remove('expanded');
          searchField.classList.remove('expanded2x');
        }
      });
      closeSearch.addEventListener('click', function() {
        // Toggle visibility of the search container
        if (searchContainer.style.display === 'flex') {
          setTimeout(() => {
            searchField.classList.remove('expanded2x');
          }, "250");
          setTimeout(() => {
            searchField.classList.remove('expanded2x');
          }, "750");
          setTimeout(() => {
            searchContainer.classList.add('fade-out');
          }, "1000");
          setTimeout(() => {
            searchContainer.style.display = 'none';
          }, "1200");
        }
      });
      
    }

}

export default searchmanager;