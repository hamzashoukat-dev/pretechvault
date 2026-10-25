/* ==========================================
   FILENAME: script.js
   ========================================== */

// --- 1. DATASET: 50 UNIQUE LAPTOP OBJECTS ---
const laptopData = [
  { id: 1, name: "MacBook Pro 16 M3 Max", brand: "Apple", price: 3499, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80", specs: { processor: "Apple M3", gen: "3rd Gen", ram: "64GB", rom: "1TB SSD", display: '16.2" Liquid Retina XDR', gpu: "40-Core GPU", battery: "22 Hours" } },
  { id: 2, name: "Dell XPS 15 9530", brand: "Dell", price: 2199, img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "13th Gen", ram: "32GB", rom: "1TB SSD", display: '15.6" OLED 3.5K', gpu: "RTX 4060", battery: "12 Hours" } },
  { id: 3, name: "Lenovo ThinkPad X1 Carbon Gen 11", brand: "Lenovo", price: 1849, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "512GB SSD", display: '14" WUXGA Anti-Glare', gpu: "Intel Iris Xe", battery: "14 Hours" } },
  { id: 4, name: "ASUS ROG Zephyrus G16", brand: "ASUS", price: 2499, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "14th Gen", ram: "32GB", rom: "2TB SSD", display: '16" QHD+ 240Hz', gpu: "RTX 4080", battery: "8 Hours" } },
  { id: 5, name: "HP Spectre x360 14", brand: "HP", price: 1599, img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '14" 2.8K OLED Touch', gpu: "Intel Iris Xe", battery: "13 Hours" } },
  { id: 6, name: "MacBook Air 15 M2", brand: "Apple", price: 1299, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80", specs: { processor: "Apple M2", gen: "2nd Gen", ram: "8GB", rom: "512GB SSD", display: '15.3" Liquid Retina', gpu: "10-Core GPU", battery: "18 Hours" } },
  { id: 7, name: "Razer Blade 18 Ultra", brand: "Razer", price: 3799, img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "14th Gen", ram: "64GB", rom: "2TB SSD", display: '18" QHD+ 300Hz', gpu: "RTX 4090", battery: "5 Hours" } },
  { id: 8, name: "Lenovo Legion Pro 7i", brand: "Lenovo", price: 2299, img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "13th Gen", ram: "32GB", rom: "1TB SSD", display: '16" WQXGA 240Hz', gpu: "RTX 4080", battery: "6 Hours" } },
  { id: 9, name: "ASUS ZenBook 14 OLED", brand: "ASUS", price: 999, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 7", gen: "7000 Series", ram: "16GB", rom: "512GB SSD", display: '14" 2.8K OLED', gpu: "Radeon 780M", battery: "15 Hours" } },
  { id: 10, name: "Acer Predator Helios 16", brand: "Acer", price: 1649, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '16" WQXGA 165Hz', gpu: "RTX 4070", battery: "6 Hours" } },
  { id: 11, name: "Microsoft Surface Laptop 5", brand: "Microsoft", price: 1299, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "12th Gen", ram: "8GB", rom: "256GB SSD", display: '13.5" PixelSense Touch', gpu: "Intel Iris Xe", battery: "17 Hours" } },
  { id: 12, name: "MSI Titan GT77 HX", brand: "MSI", price: 3999, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "13th Gen", ram: "64GB", rom: "4TB SSD", display: '17.3" 4K Mini-LED', gpu: "RTX 4090", battery: "4 Hours" } },
  { id: 13, name: "Samsung Galaxy Book3 Ultra", brand: "Samsung", price: 2399, img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '16" 3K AMOLED', gpu: "RTX 4050", battery: "16 Hours" } },
  { id: 14, name: "Dell Alienware m18", brand: "Dell", price: 2899, img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 9", gen: "7000 Series", ram: "32GB", rom: "1TB SSD", display: '18" QHD+ 165Hz', gpu: "RTX 4080", battery: "5 Hours" } },
  { id: 15, name: "HP Envy x360 15", brand: "HP", price: 899, img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 5", gen: "7000 Series", ram: "8GB", rom: "512GB SSD", display: '15.6" FHD Touch', gpu: "AMD Radeon", battery: "11 Hours" } },
  { id: 16, name: "MacBook Pro 14 M3 Pro", brand: "Apple", price: 1999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80", specs: { processor: "Apple M3", gen: "3rd Gen", ram: "18GB", rom: "512GB SSD", display: '14.2" Liquid Retina XDR', gpu: "14-Core GPU", battery: "18 Hours" } },
  { id: 17, name: "Lenovo Yoga 9i Dual Screen", brand: "Lenovo", price: 1999, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: 'Dual 13.3" 2.8K OLED', gpu: "Intel Iris Xe", battery: "10 Hours" } },
  { id: 18, name: "ASUS TUF Gaming A15", brand: "ASUS", price: 1099, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 7", gen: "7000 Series", ram: "16GB", rom: "512GB SSD", display: '15.6" FHD 144Hz', gpu: "RTX 4060", battery: "8 Hours" } },
  { id: 19, name: "Acer Swift Go 14", brand: "Acer", price: 749, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "13th Gen", ram: "8GB", rom: "512GB SSD", display: '14" 2.2K IPS', gpu: "Intel Iris Xe", battery: "12 Hours" } },
  { id: 20, name: "MSI Stealth 16 Studio", brand: "MSI", price: 1999, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "32GB", rom: "1TB SSD", display: '16" QHD+ 240Hz', gpu: "RTX 4070", battery: "7 Hours" } },
  { id: 21, name: "MacBook Air 13 M1", brand: "Apple", price: 799, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80", specs: { processor: "Apple M1", gen: "1st Gen", ram: "8GB", rom: "256GB SSD", display: '13.3" Retina', gpu: "7-Core GPU", battery: "15 Hours" } },
  { id: 22, name: "Dell Inspiron 16 Plus", brand: "Dell", price: 1149, img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '16" 2.5K Display', gpu: "RTX 3050", battery: "10 Hours" } },
  { id: 23, name: "Razer Blade 14 Compact", brand: "Razer", price: 2399, img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 9", gen: "7000 Series", ram: "32GB", rom: "1TB SSD", display: '14" QHD+ 240Hz', gpu: "RTX 4070", battery: "9 Hours" } },
  { id: 24, name: "HP Omen 17", brand: "HP", price: 1799, img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '17.3" QHD 165Hz', gpu: "RTX 4070", battery: "5 Hours" } },
  { id: 25, name: "Lenovo Slim 7 ProX", brand: "Lenovo", price: 1299, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 7", gen: "6000 Series", ram: "16GB", rom: "512GB SSD", display: '14.5" 3K 120Hz', gpu: "RTX 3050", battery: "11 Hours" } },
  { id: 26, name: "Microsoft Surface Pro 9", brand: "Microsoft", price: 1099, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "12th Gen", ram: "8GB", rom: "256GB SSD", display: '13" PixelSense 120Hz', gpu: "Intel Iris Xe", battery: "15 Hours" } },
  { id: 27, name: "ASUS ROG Strix SCAR 17", brand: "ASUS", price: 3099, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 9", gen: "7000 Series", ram: "32GB", rom: "2TB SSD", display: '17.3" QHD 240Hz', gpu: "RTX 4090", battery: "4 Hours" } },
  { id: 28, name: "Samsung Galaxy Book3 Pro 360", brand: "Samsung", price: 1699, img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '16" 3K AMOLED Touch', gpu: "Intel Iris Xe", battery: "14 Hours" } },
  { id: 29, name: "Acer Chromebook Plus 515", brand: "Acer", price: 399, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i3", gen: "12th Gen", ram: "8GB", rom: "256GB SSD", display: '15.6" Full HD', gpu: "Intel UHD", battery: "10 Hours" } },
  { id: 30, name: "Dell Latitude 7440", brand: "Dell", price: 1579, img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "512GB SSD", display: '14" FHD+ Touch', gpu: "Intel Iris Xe", battery: "13 Hours" } },
  { id: 31, name: "MSI Cyborg 15", brand: "MSI", price: 899, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "12th Gen", ram: "8GB", rom: "512GB SSD", display: '15.6" FHD 144Hz', gpu: "RTX 4050", battery: "6 Hours" } },
  { id: 32, name: "LG Gram SuperSlim", brand: "LG", price: 1399, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '15.6" OLED FHD', gpu: "Intel Iris Xe", battery: "18 Hours" } },
  { id: 33, name: "Apple MacBook Pro 14 M2", brand: "Apple", price: 1599, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80", specs: { processor: "Apple M2", gen: "2nd Gen", ram: "16GB", rom: "512GB SSD", display: '14.2" Liquid Retina', gpu: "10-Core GPU", battery: "17 Hours" } },
  { id: 34, name: "Lenovo IdeaPad Slim 5", brand: "Lenovo", price: 649, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 5", gen: "7000 Series", ram: "8GB", rom: "512GB SSD", display: '16" WUXGA', gpu: "AMD Radeon", battery: "12 Hours" } },
  { id: 35, name: "ASUS Vivobook Pro 16X", brand: "ASUS", price: 1499, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '16" 3.2K 120Hz OLED', gpu: "RTX 4060", battery: "9 Hours" } },
  { id: 36, name: "HP Pavilion Plus 14", brand: "HP", price: 799, img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "13th Gen", ram: "16GB", rom: "512GB SSD", display: '14" 2.2K IPS', gpu: "Intel Iris Xe", battery: "10 Hours" } },
  { id: 37, name: "Gigabyte AORUS 15", brand: "Gigabyte", price: 1399, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "16GB", rom: "1TB SSD", display: '15.6" QHD 165Hz', gpu: "RTX 4060", battery: "5 Hours" } },
  { id: 38, name: "Framework Laptop 13 Deep Black", brand: "Framework", price: 1049, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 7", gen: "7000 Series", ram: "16GB", rom: "512GB SSD", display: '13.5" 2256x1504', gpu: "Radeon 780M", battery: "11 Hours" } },
  { id: 39, name: "Dell Precision 7680 Workstation", brand: "Dell", price: 3299, img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "13th Gen", ram: "64GB", rom: "2TB SSD", display: '16" OLED UHD+', gpu: "RTX 3500 Ada", battery: "8 Hours" } },
  { id: 40, name: "Razer Blade 16 Dual Mini-LED", brand: "Razer", price: 3299, img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i9", gen: "14th Gen", ram: "32GB", rom: "1TB SSD", display: '16" Dual-Mode Mini-LED', gpu: "RTX 4080", battery: "6 Hours" } },
  { id: 41, name: "MSI Modern 14", brand: "MSI", price: 549, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i3", gen: "12th Gen", ram: "8GB", rom: "512GB SSD", display: '14" FHD IPS', gpu: "Intel UHD", battery: "8 Hours" } },
  { id: 42, name: "Lenovo ThinkBook 14s Yoga", brand: "Lenovo", price: 929, img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "12th Gen", ram: "16GB", rom: "512GB SSD", display: '14" FHD Touch', gpu: "Intel Iris Xe", battery: "12 Hours" } },
  { id: 43, name: "Acer Nitro 16 Gaming", brand: "Acer", price: 999, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 7", gen: "7000 Series", ram: "16GB", rom: "512GB SSD", display: '16" WQXGA 165Hz', gpu: "RTX 4050", battery: "6 Hours" } },
  { id: 44, name: "Microsoft Surface Laptop Studio 2", brand: "Microsoft", price: 2399, img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "32GB", rom: "1TB SSD", display: '14.4" PixelSense 120Hz', gpu: "RTX 4060", battery: "13 Hours" } },
  { id: 45, name: "ASUS Chromebook CX9", brand: "ASUS", price: 849, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "11th Gen", ram: "16GB", rom: "512GB SSD", display: '14" FHD Anti-Glare', gpu: "Intel Iris Xe", battery: "14 Hours" } },
  { id: 46, name: "HP DragonFly G4", brand: "HP", price: 2099, img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i7", gen: "13th Gen", ram: "32GB", rom: "1TB SSD", display: '13.5" 3K2K OLED', gpu: "Intel Iris Xe", battery: "16 Hours" } },
  { id: 47, name: "Apple MacBook Air 13 M3", brand: "Apple", price: 1099, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80", specs: { processor: "Apple M3", gen: "3rd Gen", ram: "8GB", rom: "256GB SSD", display: '13.6" Liquid Retina', gpu: "8-Core GPU", battery: "18 Hours" } },
  { id: 48, name: "Samsung Galaxy Book3 360", brand: "Samsung", price: 999, img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "13th Gen", ram: "8GB", rom: "512GB SSD", display: '13.3" FHD AMOLED Touch', gpu: "Intel Iris Xe", battery: "15 Hours" } },
  { id: 49, name: "Dell Vostro 5630", brand: "Dell", price: 849, img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80", specs: { processor: "Intel Core i5", gen: "13th Gen", ram: "16GB", rom: "512GB SSD", display: '16" FHD+ Display', gpu: "Intel Iris Xe", battery: "10 Hours" } },
  { id: 50, name: "Lenovo Legion Slim 5", brand: "Lenovo", price: 1349, img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=500&q=80", specs: { processor: "AMD Ryzen 7", gen: "7000 Series", ram: "16GB", rom: "1TB SSD", display: '16" WQXGA 165Hz', gpu: "RTX 4060", battery: "7 Hours" } }
];

// --- 2. GLOBAL STATE ---
let cart = [];
let filteredLaptops = [...laptopData];

// --- 3. DOM LOADED INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(laptopData.slice(0, 8), "featuredGrid");
  renderProducts(laptopData, "shopGrid");
  updateCartUI();
});

// --- 4. NAVIGATION / SPA ROUTING ---
function switchPage(pageId) {
  const pages = document.querySelectorAll('.page-view');
  const links = document.querySelectorAll('.nav-link');

  pages.forEach(p => p.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update navbar visual state
  links.forEach(link => {
    if (link.getAttribute('onclick').includes(pageId)) {
      link.classList.add('active');
    }
  });

  // Close mobile nav if open
  document.getElementById('navLinks').classList.remove('active');
}

function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('active');
}

// --- 5. PRODUCT RENDERING ---
function renderProducts(items, targetContainerId) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  container.innerHTML = "";

  items.forEach(laptop => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${laptop.img}" alt="${laptop.name}" class="product-img">
      <div class="product-details">
        <span class="product-brand">${laptop.brand}</span>
        <h3 class="product-title">${laptop.name}</h3>
        <p class="product-specs-summary">${laptop.specs.processor} | ${laptop.specs.ram} | ${laptop.specs.rom}</p>
        <div class="product-bottom">
          <span class="product-price">$${laptop.price}</span>
          <div>
            <button class="btn btn-secondary" onclick="openModal(${laptop.id})" style="padding: 0.4rem 0.6rem;"><i class="fa-solid fa-eye"></i></button>
            <button class="btn btn-primary" onclick="addToCart(${laptop.id})" style="padding: 0.4rem 0.8rem;"><i class="fa-solid fa-cart-plus"></i></button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- 6. FILTERING & SEARCH LOGIC ---
function applyFilters() {
  const searchVal = document.getElementById('filterSearch').value.toLowerCase();
  const brandVal = document.getElementById('filterBrand').value;
  const procVal = document.getElementById('filterProcessor').value;
  const ramVal = document.getElementById('filterRAM').value;
  const priceVal = parseFloat(document.getElementById('filterPrice').value);
  const sortVal = document.getElementById('sortOrder').value;

  filteredLaptops = laptopData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchVal) || item.brand.toLowerCase().includes(searchVal);
    const matchesBrand = (brandVal === 'All') || (item.brand === brandVal);
    const matchesProc = (procVal === 'All') || (item.specs.processor.includes(procVal));
    const matchesRAM = (ramVal === 'All') || (item.specs.ram === ramVal);
    const matchesPrice = item.price <= priceVal;

    return matchesSearch && matchesBrand && matchesProc && matchesRAM && matchesPrice;
  });

  // Sorting
  if (sortVal === 'low-high') {
    filteredLaptops.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'high-low') {
    filteredLaptops.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'name') {
    filteredLaptops.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update Shop Grid and Counts
  renderProducts(filteredLaptops, "shopGrid");
  document.getElementById('productCount').textContent = `Showing ${filteredLaptops.length} Laptops`;
  
  const noRes = document.getElementById('noResults');
  if (filteredLaptops.length === 0) {
    noRes.classList.remove('hidden');
  } else {
    noRes.classList.add('hidden');
  }
}

function updatePriceLabel() {
  document.getElementById('priceDisplay').textContent = document.getElementById('filterPrice').value;
}

function resetFilters() {
  document.getElementById('filterSearch').value = "";
  document.getElementById('filterBrand').value = "All";
  document.getElementById('filterProcessor').value = "All";
  document.getElementById('filterRAM').value = "All";
  document.getElementById('filterPrice').value = 4000;
  document.getElementById('sortOrder').value = "default";
  updatePriceLabel();
  applyFilters();
}

function handleGlobalSearch(e) {
  const query = e.target.value;
  switchPage('shop');
  document.getElementById('filterSearch').value = query;
  applyFilters();
}

function filterByBrand(brand) {
  switchPage('shop');
  document.getElementById('filterBrand').value = brand;
  applyFilters();
}

function filterByCategory(key, val) {
  switchPage('shop');
  if (key === 'Processor') document.getElementById('filterProcessor').value = val;
  if (key === 'RAM') document.getElementById('filterRAM').value = val;
  applyFilters();
}

// --- 7. MODAL DETAILED VIEW ---
function openModal(id) {
  const laptop = laptopData.find(item => item.id === id);
  if (!laptop) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-img-container">
      <img src="${laptop.img}" alt="${laptop.name}">
    </div>
    <div class="modal-info">
      <span class="product-brand">${laptop.brand}</span>
      <h2>${laptop.name}</h2>
      <h3 style="color: var(--accent-cyan); margin: 0.5rem 0;">$${laptop.price}</h3>
      
      <ul class="modal-specs-list">
        <li><span>Processor:</span> <span>${laptop.specs.processor} (${laptop.specs.gen})</span></li>
        <li><span>RAM:</span> <span>${laptop.specs.ram}</span></li>
        <li><span>Storage:</span> <span>${laptop.specs.rom}</span></li>
        <li><span>Display:</span> <span>${laptop.specs.display}</span></li>
        <li><span>Graphics Card:</span> <span>${laptop.specs.gpu}</span></li>
        <li><span>Battery Life:</span> <span>${laptop.specs.battery}</span></li>
      </ul>

      <button class="btn btn-primary btn-block" onclick="addToCart(${laptop.id}); closeModalDirect();">
        <i class="fa-solid fa-cart-plus"></i> Add to Cart
      </button>
    </div>
  `;

  document.getElementById('productModal').classList.add('active');
}

function closeModal(event) {
  if (event.target.id === 'productModal') {
    closeModalDirect();
  }
}

function closeModalDirect() {
  document.getElementById('productModal').classList.remove('active');
}

// --- 8. SHOPPING CART SYSTEM ---
function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('active');
  document.getElementById('cartOverlay').classList.toggle('active');
}

function addToCart(id) {
  const laptop = laptopData.find(item => item.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...laptop, qty: 1 });
  }

  updateCartUI();
  
  // Quick Feedback
  const badge = document.getElementById('cartBadge');
  badge.style.transform = 'scale(1.4)';
  setTimeout(() => badge.style.transform = 'scale(1)', 200);
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById('cartItemsContainer');
  const countBadge = document.getElementById('cartBadge');
  const countTitle = document.getElementById('cartCount');

  container.innerHTML = "";

  let totalItems = 0;
  let subtotal = 0;

  cart.forEach(item => {
    totalItems += item.qty;
    subtotal += item.price * item.qty;

    const cartEl = document.createElement('div');
    cartEl.className = 'cart-item';
    cartEl.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
        <div class="cart-controls">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
    container.appendChild(cartEl);
  });

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  countBadge.textContent = totalItems;
  countTitle.textContent = totalItems;

  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add hardware before checking out!");
    return;
  }

  alert("Order Placed Successfully! Thank you for purchasing from PreTechVault.");
  cart = [];
  updateCartUI();
  toggleCart();
}

// --- 9. FORMS & NEWSLETTER ---
function handleContactSubmit(e) {
  e.preventDefault();
  const alert = document.getElementById('contactAlert');
  alert.className = "alert alert-success";
  alert.textContent = "Thank you! Your message has been sent successfully. Our hardware team will reply within 24 hours.";
  alert.classList.remove('hidden');

  document.getElementById('contactForm').reset();

  setTimeout(() => {
    alert.classList.add('hidden');
  }, 5000);
}

function handleNewsletter(e) {
  e.preventDefault();
  alert("Subscribed! You are now on the VIP list for technical drops and clearance alerts.");
  e.target.reset();
}
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (submitBtn) {
      submitBtn.innerText = 'بھیجا جا رہا ہے...';
      submitBtn.disabled = true;
    }

    // EmailJS کے ذریعے پیغام بھیجنا
    emailjs.sendForm('service_w20t5et', 'template_gng4lbb', this)
      .then(function() {
          alert('آپ کا پیغام کامیابی سے موصول ہو گیا ہے!');
          contactForm.reset();
          if (submitBtn) {
            submitBtn.innerText = 'پیغام بھیجیں';
            submitBtn.disabled = false;
          }
      }, function(error) {
          alert('پیغام بھیجنے میں ناکامی ہوئی: ' + JSON.stringify(error));
          if (submitBtn) {
            submitBtn.innerText = 'پیغام بھیجیں';
            submitBtn.disabled = false;
          }
      });
  });
}