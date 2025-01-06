document.addEventListener('DOMContentLoaded', function() {
    // Fetch products from the server and display them
    fetchProducts();
  });
  
  function fetchProducts() {
    fetch('/php/product/fetch_products.php')
      .then(response => response.json())
      .then(data => {
        const productsContainer = document.getElementById('products-container');
        data.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
            <button>Add to Cart</button>
          `;
          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  }


  
