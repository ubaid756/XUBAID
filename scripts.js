// Store products, cart, and favorite data
const products = [
  {
    id: 1,
    name: "AI Notes & PDFs",
    category: "guides",
    price: 5,
    salePrice: 3,
    img: "https://via.placeholder.com/260x180?text=AI+Notes",
    desc: "Step-by-step AI guides for learners."
  },
  {
    id: 2,
    name: "Facial Harmony Guide",
    category: "skincare",
    price: 20,
    salePrice: 15,
    img: "https://via.placeholder.com/260x180?text=Facial+Harmony",
    desc: "Scientific self-improvement PDF, instant download."
  },
  {
    id: 3,
    name: "JKBOSE Digital Notes Class 9",
    category: "guides",
    price: 15,
    salePrice: 15,
    img: "https://via.placeholder.com/260x180?text=JKBOSE+Class+9",
    desc: "Academic notes for Science, SST, English, Math."
  },
  {
    id: 4,
    name: "JKBOSE Digital Notes Class 10",
    category: "guides",
    price: 25,
    salePrice: 20,
    img: "https://via.placeholder.com/260x180?text=JKBOSE+Class+10",
    desc: "Advanced notes for Science, SST, English, Math."
  },
  {
    id: 5,
    name: "Entrepreneurship eBooks",
    category: "guides",
    price: 50,
    salePrice: 40,
    img: "https://via.placeholder.com/260x180?text=Entrepreneurship+eBooks",
    desc: "Unlock a millionaire mindset."
  },
  {
    id: 6,
    name: "Exclusive Premium Courses",
    category: "aitools",
    price: 200,
    salePrice: 200,
    img: "https://via.placeholder.com/260x180?text=Premium+Courses",
    desc: "Coming soon - advanced entrepreneurial courses."
  }
];

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '{}');
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById('cartCount').textContent = count;
}

// You can add functions here for cart/favorites management as needed

window.onload = function () {
  updateCartCount();
}
