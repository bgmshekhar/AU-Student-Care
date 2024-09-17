document.addEventListener('DOMContentLoaded', () => {
    let searchData = [];
  
    // Load search data from the JSON file
    fetch('search-data.json')
      .then(response => response.json())
      .then(data => {
        searchData = data;
      });
  
    // Perform the search based on the query
    function search(query) {
      query = query.toLowerCase();
      let results = searchData.filter(page => {
        return page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query);
      });
      displayResults(results);
    }
  
    // Display the search results in the modal
    function displayResults(results) {
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
      } else {
        results.forEach(result => {
          const resultDiv = document.createElement('div');
          resultDiv.classList.add('result-card');
          resultDiv.innerHTML = `
            <h3><a href="${result.url}">${result.title}</a></h3>
            <p>${result.content.substring(0, 100)}...</p>
          `;
          searchResults.appendChild(resultDiv);
        });
      }
  
      // Show the modal with the search results
      document.getElementById('search-results-modal').style.display = 'flex';
    }
  
    // Function to handle both button click and Enter key press for search
    function handleSearch() {
      const query = document.querySelector('.search-box').value;
      if (query) {
        search(query);
      }
    }
  
    // Close the modal
    function closeSearchModal() {
      document.getElementById('search-results-modal').style.display = 'none';
    }
  
    // Add event listener to the search button
    document.querySelector('.search').addEventListener('click', handleSearch);
  
    // Add event listener to detect "Enter" key press in the search box
    document.querySelector('.search-box').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();  // Prevent form submission or default behavior
        handleSearch();  // Trigger the search when Enter key is pressed
      }
    });
  
    // Add event listener to close the modal when the close button is clicked
    document.querySelector('.close-btn').addEventListener('click', closeSearchModal);
  });
  