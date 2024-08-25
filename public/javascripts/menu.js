
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.add-btn').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.getAttribute('data-name');
                const price = parseFloat(button.getAttribute('data-price'));
                const image = button.closest('.menu-item').querySelector('img').src;
                const restaurant = document.querySelector('.restaurant-title').textContent; 
                addItemToCart(name, price, image, restaurant);
            });
        });

        function addItemToCart(name, price, image, restaurant) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                cart.push({ name, price, image, restaurant, count: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart');
        }
    });
