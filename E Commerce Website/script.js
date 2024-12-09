let cart = [];

function addToCart(id, name, price) {
  const product = { id, name, price };
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartButton = document.getElementById('cart-button');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Update cart button
  cartButton.textContent = `Cart (${cart.length})`;

  // Update cart items list
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  // Update total price
  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function closeCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = 'none';
}

function checkout() {
  alert('Proceeding to checkout');
  cart = []; // Clear the cart after checkout
  updateCart();
  closeCart();
}

  