// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
  }
  
  getYear();
  
  // owl carousel initialization
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  });
  
// Get all product elements
const products = document.querySelectorAll('.product');


// custom.js

document.addEventListener('DOMContentLoaded', function () {
  // Your other initialization code
  
  // Example: Update the displayYear in the footer
  var currentYear = new Date().getFullYear();
  document.getElementById('displayYear').innerText = currentYear;

  // Example: Add event listeners or additional functionality
  var productDetailPage = document.querySelector('.product-detail-section');
  if (productDetailPage) {
      // This code will run only on the product detail page
      // You can add more specific functionality for this page
  }
});

// Add any additional functions or scripts as needed




// Add event listener to each product
products.forEach(product => {
  product.addEventListener('click', () => {
    // Get the product ID or any unique identifier
    const productId = product.dataset.productId;

    // Navigate to the detail page with the product ID
    window.location.href = `/product/${productId}`;
  });
});

  // form submission and AJAX request
  document.querySelector('.form-inline').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    const query = document.querySelector('[name="query"]').value;
  
    // Make an AJAX request to the server
    fetch(`/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(results => {
        // Update the UI with the search results
        const searchResultsElement = document.getElementById('search-results');
        searchResultsElement.innerHTML = ''; // Clear previous results
  
        results.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.innerHTML = `<a href="${result.url}">${result.title}</a>`;
          searchResultsElement.appendChild(resultItem);
        });
      })
      .catch(error => console.error('Error fetching search results:', error));
  });
  