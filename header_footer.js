// This file can load till first layer 

// Function to load HTML from another file and inject into a div
function loadComponent(url, elementId) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Error loading component:', error));
}

// Function to determine the correct path based on the current directory
function getPath(fileName) {
  const currentPath = window.location.pathname; // Get the current path
  console.log('Current path:', currentPath); // Log current path
  const pathSegments = currentPath.split('/'); // Split the path into segments
  
  // Determine how many directories up we need to go
  const directoriesUp = pathSegments.length - 2; // 2 is to go from the file name to the root directory
  console.log('Directories up:', directoriesUp); // Log directories up

  // Build the path to the file
  const fullPath = '../'.repeat(directoriesUp) + fileName;
  console.log('Loading component from:', fullPath); // Log the generated path
  return fullPath; 
}

// Load the header and footer using dynamic paths
document.addEventListener('DOMContentLoaded', function() {
  loadComponent(getPath('header.html'), 'header');  // Load header
  loadComponent(getPath('footer.html'), 'footer');  // Load footer
});
