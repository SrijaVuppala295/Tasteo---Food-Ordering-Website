document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalAmount = document.querySelector('.total-amount');
    const clearCartButton = document.querySelector('.clear-cart');
    let cart = [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.count;
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <span>${item.name} (₹${item.price})</span>
                <span class="cart-item-count">x${item.count}</span>
                <button class="remove-item" data-name="${item.name}">×</button>
            `;
            cartItemsContainer.appendChild(li);
        });
        totalAmount.textContent = `₹${total}`;
        cartCount.textContent = cart.length;
    }

    function addItemToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.count += 1;
        } else {
            cart.push({ name, price, count: 1 });
        }
        updateCart();
    }

    function removeItemFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCart();
    }

    function clearCart() {
        cart = [];
        updateCart();
    }

    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addItemToCart(name, price);
        });
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const name = e.target.getAttribute('data-name');
            removeItemFromCart(name);
        }
    });

    clearCartButton.addEventListener('click', clearCart);
});
