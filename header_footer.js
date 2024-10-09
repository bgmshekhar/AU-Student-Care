    // This file can load till first layer 
    
    
    // Function to load HTML from another file and inject into a div
    function loadComponent(url, elementId) {
        fetch(url)
          .then(response => response.text())
          .then(data => {
            document.getElementById(elementId).innerHTML = data;
          })
          .catch(error => console.error('Error loading component:', error));
      }
  
      // Load the header and footer
      loadComponent('/AU-Student-Care.com/header.html', 'header');
      loadComponent('main/footer.html', 'footer');
