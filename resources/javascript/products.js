// Extended Product Data
const allProducts = [
    ...products, // Includes the products from script.js
    {
        id: 5,
        name: "Reusable Water Bottle",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        description: "Stainless steel water bottle with double insulation.",
        category: "lifestyle"
    },
    {
        id: 6,
        name: "Bamboo Cutlery Set",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
        description: "Portable bamboo utensil set with carrying case.",
        category: "kitchen"
    },
    {
        id: 7,
        name: "Organic Cotton Towels",
        price: 24.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jZO3uLd80IjPnNAX2_5CN8FS2i-ecBU_AA&s",
        description: "Set of 3 organic cotton bath towels.",
        category: "bathroom"
    },
    {
        id: 8,
        name: "Compost Bin",
        price: 29.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BSYYdkA9wVGeiCcdqnAvHsKSsF202rWXzA&s",
        description: "Countertop compost bin with charcoal filter.",
        category: "kitchen"
    }
];

// Load All Products
function loadAllProducts() {
    const productsGrid = document.getElementById('all-products');
    productsGrid.innerHTML = '';
    
    allProducts.forEach(product => {
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

// Filter Products
document.getElementById('filter-btn').addEventListener('click', function() {
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    
    let filteredProducts = allProducts;
    
    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category
        );
    }
    
    // Filter by price
    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                return product.price >= min;
            }
        });
    }
    
    // Display filtered products
    const productsGrid = document.getElementById('all-products');
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
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
});

// Initialize Products Page
document.addEventListener('DOMContentLoaded', function() {
    loadAllProducts();
    updateCartCount();
});