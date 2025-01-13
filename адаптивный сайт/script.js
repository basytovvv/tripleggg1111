let cart = [];

function addToCart(button) {
    const product = button.closest('.product');
    const productId = product.getAttribute('data-id');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartCount.textContent = cart.length;
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $ ${item.price * item.quantity}`;
        cartItemsList.appendChild(li);
    });
    cartTotal.textContent = `Итого: $  ${total}`;
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'flex' : 'none';
}

function clearCart() {
    cart = [];
    updateCart();
}

function checkout() {
    alert("Оформление заказа. Спасибо за покупку!");
    clearCart();
}