// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
    
    // Animate Links
    navItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Product Data
const products = [
    {
        id: 1,
        name: "Bamboo Toothbrush Set",
        price: 12.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvJ7Wa1kT6RWKx4Rdg0y66Iw9G-WY-Lo-9A&s",
        description: "Eco-friendly bamboo toothbrushes with charcoal bristles."
    },
    {
        id: 2,
        name: "Reusable Shopping Bag",
        price: 8.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDBEB6RAgbnPTIbw0d7uNXUg2fAUaAwajfw&s",
        description: "Durable cotton shopping bag that folds into a pocket."
    },
    {
        id: 3,
        name: "Stainless Steel Straws",
        price: 9.99,
        image: "https://www.kleankanteen.com/cdn/shop/products/KSTRAW4PK-MIX-ST-T_1600x.jpg?v=1641488057",
        description: "Set of 4 stainless steel straws with cleaning brush."
    },
    {
        id: 4,
        name: "Beeswax Food Wraps",
        price: 15.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxE-H7G6fYWeC4sekdA1hByxZoH70Y_MI5w&s",
        description: "Sustainable alternative to plastic wrap for food storage."
    }
];

// Load Featured Products
function loadFeaturedProducts() {
    const productsGrid = document.getElementById('featured-products');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Cart Functionality
let cart = [];

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCartCount();
        
        // Show added to cart feedback
        e.target.textContent = 'Added!';
        e.target.style.backgroundColor = '#2E7D32';
        setTimeout(() => {
            e.target.textContent = 'Add to Cart';
            e.target.style.backgroundColor = '';
        }, 1000);
    }
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    // In a real app, you would send this to your server
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    updateCartCount();
});