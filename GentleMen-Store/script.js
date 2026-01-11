// GentleMen E-Commerce Store - JavaScript
// Data dan fungsi utama untuk aplikasi e-commerce

// ========== DATA APLIKASI ==========
// Data produk
const products = [
    {
        id: 1,
        name: "Dumbbell Set 20kg",
        category: "Alat Olahraga",
        price: 850000,
        originalPrice: 950000,
        image: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        rating: 4.8,
        badge: "TERLARIS",
        description: "Set dumbell premium dengan grip karet anti slip. Cocok untuk latihan di rumah atau gym.",
        stock: 15,
        weight: 20000 // gram
    },
    {
        id: 2,
        name: "Face Serum for Men",
        category: "Skincare Pria",
        price: 275000,
        originalPrice: 325000,
        image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
        rating: 4.6,
        badge: "BARU",
        description: "Serum wajah khusus pria dengan kandungan vitamin C dan hyaluronic acid.",
        stock: 28,
        weight: 100
    },
    {
        id: 3,
        name: "Jaket Bomber Hitam",
        category: "Fashion Pria",
        price: 625000,
        originalPrice: 750000,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        rating: 4.9,
        badge: "DISKON",
        description: "Jaket bomber premium dengan bahan water resistant dan desain modern.",
        stock: 12,
        weight: 800
    },
    {
        id: 4,
        name: "Smart Watch Fitness",
        category: "Aksesoris",
        price: 1250000,
        originalPrice: 1500000,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1399&q=80",
        rating: 4.7,
        badge: "PREMIUM",
        description: "Smartwatch dengan fitur fitness tracking, monitor jantung, dan notifikasi smartphone.",
        stock: 8,
        weight: 150
    },
    {
        id: 5,
        name: "Resistance Bands Set",
        category: "Alat Olahraga",
        price: 195000,
        originalPrice: 250000,
        image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1506&q=80",
        rating: 4.5,
        badge: "TERLARIS",
        description: "Set resistance bands 5 level untuk latihan kekuatan dan fleksibilitas.",
        stock: 32,
        weight: 500
    },
    {
        id: 6,
        name: "Face Wash Charcoal",
        category: "Skincare Pria",
        price: 125000,
        originalPrice: 150000,
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        rating: 4.4,
        badge: null,
        description: "Face wash dengan charcoal aktif untuk membersihkan pori-pori dan mengurangi minyak berlebih.",
        stock: 45,
        weight: 150
    },
    {
        id: 7,
        name: "Sepatu Sneakers Premium",
        category: "Fashion Pria",
        price: 950000,
        originalPrice: 1200000,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80",
        rating: 4.9,
        badge: "LIMITED",
        description: "Sneakers premium dengan bahan kulit asli dan sol karet untuk kenyamanan maksimal.",
        stock: 6,
        weight: 1200
    },
    {
        id: 8,
        name: "Grooming Kit Lengkap",
        category: "Grooming",
        price: 450000,
        originalPrice: 550000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80",
        rating: 4.6,
        badge: "DISKON",
        description: "Set alat grooming lengkap termasuk clipper, trimmer, sikat, dan gunting.",
        stock: 18,
        weight: 1500
    }
];

// Data kategori
const categories = [
    {
        id: 1,
        name: "Alat Olahraga",
        description: "Perlengkapan fitness dan olahraga premium",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 2,
        name: "Skincare Pria",
        description: "Perawatan kulit khusus pria",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
    },
    {
        id: 3,
        name: "Fashion Pria",
        description: "Pakaian dan aksesoris modern",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
];

// Data keranjang (disimpan di localStorage jika ada)
let cart = JSON.parse(localStorage.getItem('gentlemen_cart')) || [];
let cartCount = 0;
let cartTotal = 0;

// Data user (simulasi)
let currentUser = JSON.parse(localStorage.getItem('gentlemen_user')) || null;

// Data checkout
let checkoutData = {
    shipping: {},
    payment: {},
    order: {}
};

// Biaya pengiriman
const shippingCosts = {
    regular: 15000,
    express: 30000,
    sameDay: 50000
};

// ========== DOM ELEMENTS ==========
// Ambil semua elemen DOM yang diperlukan
const productGrid = document.getElementById('productGrid');
const cartIcon = document.getElementById('cartIcon');
const cartCountEl = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const overlay = document.getElementById('overlay');
const closeCart = document.getElementById('closeCart');
const continueShopping = document.getElementById('continueShopping');
const cartItems = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchIcon = document.getElementById('searchIcon');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const userIcon = document.getElementById('userIcon');
const authModal = document.getElementById('authModal');
const closeAuth = document.getElementById('closeAuth');
const authTitle = document.getElementById('authTitle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registerName = document.getElementById('registerName');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const registerConfirm = document.getElementById('registerConfirm');
const registerPhone = document.getElementById('registerPhone');
const authTabs = document.querySelectorAll('.auth-tab');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutSteps = document.querySelectorAll('.step');
const checkoutStepContainers = document.querySelectorAll('.checkout-step');
const nextStepButtons = document.querySelectorAll('.next-step');
const prevStepButtons = document.querySelectorAll('.prev-step');
const shippingForm = document.getElementById('shippingForm');
const shippingMethod = document.getElementById('shippingMethod');
const paymentMethods = document.querySelectorAll('.payment-method');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const summarySubtotal = document.getElementById('summarySubtotal');
const summaryShipping = document.getElementById('summaryShipping');
const summaryTotal = document.getElementById('summaryTotal');
const confirmShipping = document.getElementById('confirmShipping');
const confirmPayment = document.getElementById('confirmPayment');
const confirmOrder = document.getElementById('confirmOrder');
const agreeTerms = document.getElementById('agreeTerms');
const chatbotButton = document.getElementById('chatbotButton');
const notificationContainer = document.getElementById('notificationContainer');

// ========== UTILITY FUNCTIONS ==========
// Format angka ke Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Generate rating bintang
function generateRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Simpan cart ke localStorage
function saveCartToStorage() {
    localStorage.setItem('gentlemen_cart', JSON.stringify(cart));
}

// Tampilkan notifikasi
function showNotification(message, type = 'info') {
    // Hapus notifikasi sebelumnya
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Tambahkan ke container
    notificationContainer.appendChild(notification);
    
    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
}

// Hitung total berat keranjang
function calculateCartWeight() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product.weight * item.quantity);
    }, 0);
}

// ========== PRODUCT FUNCTIONS ==========
// Render produk ke halaman
function renderProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-rating">
                    ${generateRating(product.rating)}
                    <span style="margin-left: 5px; font-size: 0.9rem;">(${product.rating})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formatRupiah(product.price)}</span>
                    ${product.originalPrice ? `<span class="original-price">${formatRupiah(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-stock" style="font-size: 0.9rem; color: ${product.stock > 10 ? '#2ecc71' : (product.stock > 0 ? '#f39c12' : '#e74c3c')}; margin-bottom: 1rem;">
                    Stok: ${product.stock > 0 ? product.stock + ' tersedia' : 'Habis'}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}" ${product.stock === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ${product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
                    </button>
                    <button class="view-details" data-id="${product.id}">Detail</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Tambahkan event listener ke tombol produk
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
}

// Tampilkan detail produk
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Buat modal untuk detail produk
    const modalHTML = `
        <div class="product-detail-modal">
            <div class="product-detail-content">
                <button class="close-detail" id="closeDetail">
                    <i class="fas fa-times"></i>
                </button>
                <div class="product-detail-container">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-detail-info">
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                        <h2>${product.name}</h2>
                        <div class="product-detail-category">${product.category}</div>
                        <div class="product-detail-rating">
                            ${generateRating(product.rating)}
                            <span>(${product.rating} rating)</span>
                        </div>
                        <div class="product-detail-price">
                            <span class="current-price">${formatRupiah(product.price)}</span>
                            ${product.originalPrice ? `<span class="original-price">${formatRupiah(product.originalPrice)}</span>` : ''}
                        </div>
                        <div class="product-detail-stock">
                            <strong>Stok:</strong> 
                            <span style="color: ${product.stock > 10 ? '#2ecc71' : (product.stock > 0 ? '#f39c12' : '#e74c3c')}">
                                ${product.stock > 0 ? product.stock + ' tersedia' : 'Habis'}
                            </span>
                        </div>
                        <div class="product-detail-description">
                            <h3>Deskripsi Produk</h3>
                            <p>${product.description}</p>
                        </div>
                        <div class="product-detail-actions">
                            <button class="add-to-cart-detail" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                                ${product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
                            </button>
                            <button class="buy-now-detail" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Tambahkan modal ke body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    
    // Tampilkan modal
    const modal = document.querySelector('.product-detail-modal');
    overlay.classList.add('active');
    
    // Event listener untuk modal
    document.getElementById('closeDetail').addEventListener('click', () => {
        modal.remove();
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', () => {
        modal.remove();
        overlay.classList.remove('active');
    });
    
    // Event listener untuk tombol di modal
    document.querySelector('.add-to-cart-detail').addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
        modal.remove();
        overlay.classList.remove('active');
    });
    
    document.querySelector('.buy-now-detail').addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
        modal.remove();
        overlay.classList.remove('active');
        openCheckoutModal();
    });
    
    // Tambahkan style untuk modal detail
    const style = document.createElement('style');
    style.textContent = `
        .product-detail-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .product-detail-content {
            background-color: var(--primary-dark);
            width: 90%;
            max-width: 900px;
            max-height: 90vh;
            border-radius: 12px;
            padding: 2rem;
            border: 2px solid var(--primary-blue);
            position: relative;
            overflow-y: auto;
        }
        
        .close-detail {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            color: var(--text-light);
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 10;
        }
        
        .product-detail-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .product-detail-image img {
            width: 100%;
            border-radius: 8px;
        }
        
        .product-detail-info h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .product-detail-category {
            color: var(--secondary-blue);
            font-weight: 500;
            margin-bottom: 1rem;
        }
        
        .product-detail-price {
            margin: 1.5rem 0;
        }
        
        .product-detail-price .current-price {
            font-size: 2rem;
        }
        
        .product-detail-description {
            margin: 1.5rem 0;
            padding: 1rem 0;
            border-top: 1px solid var(--medium-gray);
            border-bottom: 1px solid var(--medium-gray);
        }
        
        .product-detail-description h3 {
            margin-bottom: 0.5rem;
        }
        
        .product-detail-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .product-detail-actions button {
            flex: 1;
            padding: 1rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }
        
        .add-to-cart-detail {
            background-color: var(--primary-blue);
            color: var(--text-light);
        }
        
        .add-to-cart-detail:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .buy-now-detail {
            background-color: var(--accent-gold);
            color: var(--primary-dark);
        }
        
        .buy-now-detail:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
            .product-detail-container {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========== CART FUNCTIONS ==========
// Tambah produk ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Cek stok
    if (product.stock === 0) {
        showNotification('Maaf, produk ini habis', 'error');
        return;
    }
    
    // Cek apakah produk sudah ada di keranjang
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Cek apakah stok mencukupi
        if (existingItem.quantity >= product.stock) {
            showNotification(`Stok produk ${product.name} tidak mencukupi`, 'error');
            return;
        }
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update UI keranjang
    updateCart();
    
    // Tampilkan notifikasi
    showNotification(`${product.name} berhasil ditambahkan ke keranjang!`, 'success');
    
    // Simpan ke localStorage
    saveCartToStorage();
}

// Update keranjang
function updateCart() {
    // Hitung total item dan total harga
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Update counter keranjang
    cartCountEl.textContent = cartCount;
    
    // Update tampilan keranjang
    renderCartItems();
    
    // Update total harga
    cartTotalEl.textContent = formatRupiah(cartTotal);
    
    // Update ringkasan checkout
    updateOrderSummary();
    
    // Sembunyikan pesan keranjang kosong jika ada item
    if (cart.length > 0) {
        emptyCartMessage.style.display = 'none';
    } else {
        emptyCartMessage.style.display = 'block';
    }
}

// Render item keranjang
function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.appendChild(emptyCartMessage);
        emptyCartMessage.style.display = 'block';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">Hapus</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Tambahkan event listener ke tombol keranjang
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateQuantity(productId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

// Update jumlah item di keranjang
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    const product = products.find(p => p.id === productId);
    
    // Cek stok jika menambah jumlah
    if (change > 0 && item.quantity >= product.stock) {
        showNotification(`Stok produk ${item.name} tidak mencukupi`, 'error');
        return;
    }
    
    item.quantity += change;
    
    // Jika jumlah 0 atau kurang, hapus item
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCart();
    saveCartToStorage();
}

// Hapus item dari keranjang
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        saveCartToStorage();
        showNotification(`${item.name} dihapus dari keranjang`, 'info');
    }
}

// ========== CHECKOUT FUNCTIONS ==========
// Buka modal checkout
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja Anda masih kosong.', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Silakan login terlebih dahulu untuk checkout', 'error');
        openAuthModal('login');
        return;
    }
    
    checkoutModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset checkout steps
    setCheckoutStep(1);
    
    // Prefill user data
    if (currentUser) {
        document.getElementById('fullName').value = currentUser.name || '';
        document.getElementById('email').value = currentUser.email || '';
        document.getElementById('phone').value = currentUser.phone || '';
    }
}

// Tutup modal checkout
function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Set step checkout
function setCheckoutStep(stepNumber) {
    // Update steps UI
    checkoutSteps.forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.dataset.step) <= stepNumber) {
            step.classList.add('active');
        }
    });
    
    // Show active step content
    checkoutStepContainers.forEach(container => {
        container.classList.remove('active');
        if (container.id === `step${stepNumber}`) {
            container.classList.add('active');
        }
    });
}

// Update ringkasan pesanan
function updateOrderSummary() {
    const shippingMethodValue = shippingMethod.value;
    const shippingCost = shippingCosts[shippingMethodValue];
    
    summarySubtotal.textContent = formatRupiah(cartTotal);
    summaryShipping.textContent = formatRupiah(shippingCost);
    summaryTotal.textContent = formatRupiah(cartTotal + shippingCost);
    
    // Simpan ke checkout data
    checkoutData.order = {
        subtotal: cartTotal,
        shipping: shippingCost,
        total: cartTotal + shippingCost
    };
}

// Validasi form pengiriman
function validateShippingForm() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    
    if (!fullName || !phone || !email || !address || !city || !postalCode) {
        showNotification('Harap lengkapi semua informasi pengiriman', 'error');
        return false;
    }
    
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Format email tidak valid', 'error');
        return false;
    }
    
    // Validasi nomor telepon
    const phoneRegex = /^[0-9]{10,13}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        showNotification('Format nomor telepon tidak valid', 'error');
        return false;
    }
    
    // Simpan data pengiriman
    checkoutData.shipping = {
        fullName,
        phone: cleanPhone,
        email,
        address,
        city,
        postalCode,
        shippingMethod: shippingMethod.value
    };
    
    return true;
}

// Konfirmasi pesanan
function confirmOrderProcess() {
    if (!agreeTerms.checked) {
        showNotification('Harap setujui syarat dan ketentuan', 'error');
        return;
    }
    
    // Simulasi proses pesanan
    const orderId = 'ORD-' + Date.now().toString().slice(-8);
    
    // Kurangi stok produk
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            product.stock -= item.quantity;
        }
    });
    
    // Simpan pesanan ke localStorage
    const order = {
        id: orderId,
        date: new Date().toISOString(),
        customer: checkoutData.shipping,
        payment: checkoutData.payment,
        items: [...cart],
        total: checkoutData.order.total,
        status: 'pending'
    };
    
    let orders = JSON.parse(localStorage.getItem('gentlemen_orders')) || [];
    orders.push(order);
    localStorage.setItem('gentlemen_orders', JSON.stringify(orders));
    
    // Reset keranjang
    cart = [];
    updateCart();
    saveCartToStorage();
    
    // Tutup modal
    closeCheckoutModal();
    
    // Tampilkan konfirmasi
    showNotification(`Pesanan #${orderId} berhasil dibuat! Terima kasih telah berbelanja di GentleMen Store.`, 'success');
    
    // Render ulang produk untuk update stok
    renderProducts();
    
    // Reset checkout data
    checkoutData = {
        shipping: {},
        payment: {},
        order: {}
    };
}

// Update konfirmasi pesanan
function updateConfirmation() {
    // Update informasi pengiriman
    const shipping = checkoutData.shipping;
    let shippingHTML = `
        <p><strong>Nama:</strong> ${shipping.fullName}</p>
        <p><strong>Telepon:</strong> ${shipping.phone}</p>
        <p><strong>Email:</strong> ${shipping.email}</p>
        <p><strong>Alamat:</strong> ${shipping.address}</p>
        <p><strong>Kota:</strong> ${shipping.city}, ${shipping.postalCode}</p>
        <p><strong>Pengiriman:</strong> ${shipping.shippingMethod === 'regular' ? 'Regular (3-5 hari)' : shipping.shippingMethod === 'express' ? 'Express (1-2 hari)' : 'Same Day'}</p>
    `;
    confirmShipping.innerHTML = shippingHTML;
    
    // Update metode pembayaran
    const payment = checkoutData.payment;
    let paymentHTML = `
        <p><strong>Metode:</strong> ${payment.method}</p>
    `;
    confirmPayment.innerHTML = paymentHTML;
    
    // Update ringkasan pesanan
    const order = checkoutData.order;
    let orderHTML = `
        <div class="summary-item">
            <span>Subtotal</span>
            <span>${formatRupiah(order.subtotal)}</span>
        </div>
        <div class="summary-item">
            <span>Ongkos Kirim</span>
            <span>${formatRupiah(order.shipping)}</span>
        </div>
        <div class="summary-item total">
            <span>Total</span>
            <span>${formatRupiah(order.total)}</span>
        </div>
    `;
    confirmOrder.innerHTML = orderHTML;
}

// ========== AUTH FUNCTIONS ==========
// Buka modal auth
function openAuthModal(tab = 'login') {
    authModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set active tab
    setAuthTab(tab);
}

// Tutup modal auth
function closeAuthModal() {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    loginEmail.value = '';
    loginPassword.value = '';
    registerName.value = '';
    registerEmail.value = '';
    registerPassword.value = '';
    registerConfirm.value = '';
    registerPhone.value = '';
}

// Set tab auth
function setAuthTab(tab) {
    authTabs.forEach(authTab => {
        authTab.classList.remove('active');
        if (authTab.dataset.tab === tab) {
            authTab.classList.add('active');
        }
    });
    
    if (tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        authTitle.textContent = 'Masuk ke Akun Anda';
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        authTitle.textContent = 'Daftar Akun Baru';
    }
}

// Login user
function loginUser(email, password) {
    if (!email || !password) {
        showNotification('Harap isi email dan password', 'error');
        return;
    }
    
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Format email tidak valid', 'error');
        return;
    }
    
    // Simulasi login berhasil
    currentUser = {
        email: email,
        name: email.split('@')[0],
        phone: '',
        joinDate: new Date().toISOString()
    };
    
    localStorage.setItem('gentlemen_user', JSON.stringify(currentUser));
    
    showNotification('Login berhasil! Selamat datang di GentleMen Store.', 'success');
    closeAuthModal();
    updateUserUI();
}

// Register user
function registerUser(name, email, password, confirmPassword, phone) {
    if (!name || !email || !password || !confirmPassword) {
        showNotification('Harap lengkapi semua data', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Password tidak cocok', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password minimal 6 karakter', 'error');
        return;
    }
    
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Format email tidak valid', 'error');
        return;
    }
    
    // Cek apakah email sudah terdaftar (simulasi)
    const existingUsers = JSON.parse(localStorage.getItem('gentlemen_users')) || [];
    if (existingUsers.some(user => user.email === email)) {
        showNotification('Email sudah terdaftar', 'error');
        return;
    }
    
    // Simpan user baru
    const newUser = {
        id: Date.now(),
        name,
        email,
        password, // Note: Dalam aplikasi nyata, password harus di-hash
        phone,
        joinDate: new Date().toISOString()
    };
    
    existingUsers.push(newUser);
    localStorage.setItem('gentlemen_users', JSON.stringify(existingUsers));
    
    // Auto login setelah register
    currentUser = {
        email: email,
        name: name,
        phone: phone,
        joinDate: new Date().toISOString()
    };
    
    localStorage.setItem('gentlemen_user', JSON.stringify(currentUser));
    
    showNotification('Pendaftaran berhasil! Akun Anda telah dibuat.', 'success');
    closeAuthModal();
    updateUserUI();
}

// Update UI untuk user yang login
function updateUserUI() {
    if (currentUser) {
        userIcon.innerHTML = `<i class="fas fa-user-check"></i>`;
        userIcon.title = `Login sebagai ${currentUser.name}`;
    } else {
        userIcon.innerHTML = `<i class="fas fa-user"></i>`;
        userIcon.title = 'Login';
    }
}

// Logout user
function logoutUser() {
    currentUser = null;
    localStorage.removeItem('gentlemen_user');
    showNotification('Anda telah logout', 'info');
    updateUserUI();
}

// ========== SEARCH FUNCTION ==========
// Fungsi pencarian produk
function searchProducts(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '<p class="no-results">Masukkan kata kunci pencarian</p>';
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">Tidak ditemukan produk dengan kata kunci "' + query + '"</p>';
        return;
    }
    
    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div class="search-result-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="search-result-info">
                <h4>${product.name}</h4>
                <div style="font-size: 0.9rem; color: #999; margin-bottom: 5px;">${product.category}</div>
                <div class="search-result-price">${formatRupiah(product.price)}</div>
            </div>
        `;
        
        resultItem.addEventListener('click', () => {
            showProductDetails(product.id);
            closeSearchModal();
        });
        
        searchResults.appendChild(resultItem);
    });
}

// ========== MODAL FUNCTIONS ==========
// Buka/tutup modal keranjang
function openCartModal() {
    cartModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Buka/tutup modal pencarian
function openSearchModal() {
    searchModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    searchInput.focus();
}

function closeSearchModal() {
    searchModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    searchInput.value = '';
    searchResults.innerHTML = '';
}

// ========== EVENT LISTENERS ==========
// Setup event listeners
function setupEventListeners() {
    // Cart modal
    cartIcon.addEventListener('click', openCartModal);
    closeCart.addEventListener('click', closeCartModal);
    continueShopping.addEventListener('click', closeCartModal);
    
    // Checkout
    checkoutBtn.addEventListener('click', openCheckoutModal);
    
    // Checkout modal
    closeCheckout.addEventListener('click', closeCheckoutModal);
    
    // Checkout steps
    nextStepButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            
            // Validasi step 1
            if (nextStep === 2 && !validateShippingForm()) {
                return;
            }
            
            // Update step 2 data
            if (nextStep === 2) {
                // Simpan metode pembayaran default
                checkoutData.payment = {
                    method: 'bankTransfer'
                };
            }
            
            // Update step 3 data
            if (nextStep === 3) {
                updateConfirmation();
            }
            
            setCheckoutStep(nextStep);
        });
    });
    
    prevStepButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = document.querySelector('.checkout-step.active').id.replace('step', '');
            setCheckoutStep(parseInt(currentStep) - 1);
        });
    });
    
    // Shipping method change
    shippingMethod.addEventListener('change', updateOrderSummary);
    
    // Payment methods
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remove active class from all methods
            paymentMethods.forEach(m => m.classList.remove('active'));
            
            // Add active class to clicked method
            this.classList.add('active');
            
            // Show payment details
            const paymentType = this.dataset.method;
            document.querySelectorAll('.payment-details').forEach(detail => {
                detail.style.display = 'none';
            });
            
            if (paymentType === 'bankTransfer') {
                document.getElementById('bankTransferDetails').style.display = 'block';
                checkoutData.payment.method = 'Transfer Bank';
            } else if (paymentType === 'eWallet') {
                document.getElementById('eWalletDetails').style.display = 'block';
                checkoutData.payment.method = 'E-Wallet';
            } else if (paymentType === 'creditCard') {
                checkoutData.payment.method = 'Kartu Kredit';
            } else if (paymentType === 'cod') {
                checkoutData.payment.method = 'COD (Bayar di Tempat)';
            }
        });
    });
    
    // Confirm order
    confirmOrderBtn.addEventListener('click', confirmOrderProcess);
    
    // Overlay click
    overlay.addEventListener('click', () => {
        closeCartModal();
        closeSearchModal();
        closeAuthModal();
        closeCheckoutModal();
    });
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Search
    searchIcon.addEventListener('click', openSearchModal);
    closeSearch.addEventListener('click', closeSearchModal);
    searchButton.addEventListener('click', () => searchProducts(searchInput.value));
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });
    
    // Auth
    userIcon.addEventListener('click', () => {
        if (currentUser) {
            const confirmLogout = confirm(`Anda login sebagai ${currentUser.name}. Apakah ingin logout?`);
            if (confirmLogout) {
                logoutUser();
            }
        } else {
            openAuthModal('login');
        }
    });
    
    closeAuth.addEventListener('click', closeAuthModal);
    
    // Auth tabs
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            setAuthTab(this.dataset.tab);
        });
    });
    
    // Login button
    loginButton.addEventListener('click', () => {
        loginUser(loginEmail.value, loginPassword.value);
    });
    
    // Register button
    registerButton.addEventListener('click', () => {
        registerUser(
            registerName.value,
            registerEmail.value,
            registerPassword.value,
            registerConfirm.value,
            registerPhone.value
        );
    });
    
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Tutup menu mobile jika terbuka
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
    
    // Klik kategori untuk filter produk
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            filterProductsByCategory(categoryName);
        });
    });
    
    // Scroll effect untuk header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 2rem';
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.padding = '1rem 2rem';
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// ========== FILTER PRODUCTS ==========
// Filter produk berdasarkan kategori
function filterProductsByCategory(categoryName) {
    const filteredProducts = products.filter(product => 
        product.category === categoryName
    );
    
    if (filteredProducts.length === 0) {
        showNotification(`Tidak ada produk dalam kategori ${categoryName}`, 'info');
        return;
    }
    
    // Scroll ke bagian produk
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    
    // Tampilkan semua produk terlebih dahulu
    renderProducts();
    
    // Filter produk di UI
    const allProductCards = document.querySelectorAll('.product-card');
    allProductCards.forEach(card => {
        const productCategory = card.querySelector('.product-category').textContent;
        if (productCategory !== categoryName) {
            card.style.display = 'none';
        }
    });
    
    // Tampilkan pesan filter
    const filterMessage = document.createElement('div');
    filterMessage.innerHTML = `
        <div style="text-align: center; margin: 20px 0; padding: 15px; background-color: rgba(45, 130, 156, 0.1); border-radius: 8px;">
            <p>Menampilkan produk dalam kategori: <strong>${categoryName}</strong></p>
            <button id="clearFilter" style="margin-top: 10px; padding: 8px 16px; background-color: var(--primary-blue); color: white; border: none; border-radius: 4px; cursor: pointer;">
                Tampilkan Semua Produk
            </button>
        </div>
    `;
    
    productGrid.insertBefore(filterMessage, productGrid.firstChild);
    
    // Event listener untuk tombol clear filter
    document.getElementById('clearFilter').addEventListener('click', () => {
        renderProducts();
        filterMessage.remove();
    });
}

// ========== ANIMATIONS ==========
// Animasi untuk elemen saat scroll
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.category-card, .product-card, .feature-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    function animateOnScroll() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Panggil sekali untuk elemen yang sudah terlihat
}

// ========== INITIALIZATION ==========
// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Render produk
    renderProducts();
    
    // Update cart dari localStorage
    updateCart();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Update UI untuk user
    updateUserUI();
    
    // Update order summary
    updateOrderSummary();
    
    // Animasi untuk hero section
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
    
    // Tampilkan pesan selamat datang
    setTimeout(() => {
        if (!currentUser) {
            showNotification('Selamat datang di GentleMen Store! Temukan kebutuhan pria premium di sini.', 'info');
        } else {
            showNotification(`Selamat datang kembali, ${currentUser.name}!`, 'success');
        }
    }, 1000);
    
    // Setup chatbot tooltip
    const chatbotTooltip = document.querySelector('.chatbot-tooltip');
    chatbotButton.addEventListener('mouseenter', () => {
        chatbotTooltip.style.opacity = '1';
        chatbotTooltip.style.visibility = 'visible';
        chatbotTooltip.style.right = '75px';
    });
    
    chatbotButton.addEventListener('mouseleave', () => {
        chatbotTooltip.style.opacity = '0';
        chatbotTooltip.style.visibility = 'hidden';
        chatbotTooltip.style.right = '70px';
    });
});