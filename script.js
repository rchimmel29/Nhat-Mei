// ========== MOBILE MENU ==========
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ========== IMAGE SLIDER ==========
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const totalSlides = sliderItems.length;

function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 5000);

sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderWrapper.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
});

// ========== PORTFOLIO CATEGORY SYSTEM ==========
const tabBtns = document.querySelectorAll('.tab-btn');
const portfolioGrid = document.getElementById('portfolioGrid');

// Dữ liệu album theo category
const albumData = {
    all: [
        {
            id: 1,
            title: "Chân Dung Đẹp Nhất",
            description: "Bộ sưu tập chân dung ấn tượng",
            image: "./img/37bdf5b9-eb8d-449e-b868-b1f8aadefefe.jpg",
            link: "https://drive.google.com/drive/u/1/folders/1yyfT07LkHiTiTSDzTLVNS8aqF4tB8ayw",
            category: "portrait"
        },
        {
            id: 2,
            title: "Khoảnh Khắc Tự Nhiên",
            description: "Những cảm xúc chân thật",
            image: "./img/cbbe63a6-5596-4b8f-965e-348796a86b0a.jpg",
            link: "https://drive.google.com/drive/u/1/folders/1vx4zukRYU0NDRtSCRcUQX8RZv1l1YJcP",
            category: "natural"
        },
        {
            id: 3,
            title: "Nhóm Bạn Thân",
            description: "Kỷ niệm đáng nhớ",
            image: "./img/829763b7-2c17-4cef-8aa6-3cf5657056a6.jpg",
            link: "https://drive.google.com/drive/u/1/folders/1H7I1lJcHW1U8bXnzYkkJPZqXB6ubrcKS",
            category: "group"
        }
    ],
    portrait: [
        {
            id: 4,
            title: "Chân Dung Nghệ Thuật",
            description: "Ánh sáng và bố cục đẹp",
            image: "./img/ACD1.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1yyfT07LkHiTiTSDzTLVNS8aqF4tB8ayw",
            category: "portrait"
        },
        {
            id: 5,
            title: "Chân Dung Cận Cảnh",
            description: "Tập trung vào biểu cảm",
            image: "./img/ACD2.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1yyfT07LkHiTiTSDzTLVNS8aqF4tB8ayw",
            category: "portrait"
        },
        {
            id: 6,
            title: "Chân Dung Đen Trắng",
            description: "Cảm xúc qua ánh sáng",
            image: "./img/ACD3.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1yyfT07LkHiTiTSDzTLVNS8aqF4tB8ayw",
            category: "portrait"
        }
    ],
    natural: [
        {
            id: 7,
            title: "Phong Cảnh Đẹp",
            description: "Bối cảnh tự nhiên",
            image: "./img/TN1.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1vx4zukRYU0NDRtSCRcUQX8RZv1l1YJcP",
            category: "natural"
        },
        {
            id: 8,
            title: "Hoàng Hôn",
            description: "Khoảnh khắc đẹp",
            image: "./img/TN2.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1vx4zukRYU0NDRtSCRcUQX8RZv1l1YJcP",
            category: "natural"
        },
        {
            id: 9,
            title: "Cảm Xúc Tự Nhiên",
            description: "Biểu cảm chân thật",
            image: "./img/TN3.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1vx4zukRYU0NDRtSCRcUQX8RZv1l1YJcP",
            category: "natural"
        }
    ],
    group: [
        {
            id: 10,
            title: "Nhóm Sinh Viên",
            description: "Kỷ niệm học tập",
            image: "./img/N1.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1H7I1lJcHW1U8bXnzYkkJPZqXB6ubrcKS",
            category: "group"
        },
        {
            id: 11,
            title: "Nhóm Bạn Thân",
            description: "Kỷ niệm vui vẻ",
            image: "./img/N2.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1H7I1lJcHW1U8bXnzYkkJPZqXB6ubrcKS",
            category: "group"
        },
        {
            id: 12,
            title: "Nhóm Gia Đình",
            description: "Khoảnh khắc ấm áp",
            image: "./img/N3.JPG",
            link: "https://drive.google.com/drive/u/1/folders/1H7I1lJcHW1U8bXnzYkkJPZqXB6ubrcKS",
            category: "group"
        }
    ]
};

// Album links cho từng category
const categoryLinks = {
    all: "https://drive.google.com/drive/u/1/folders/1t3lqQMYIJNDdPb3JGMsSmAwVbIRmy0Bc",
    portrait: "https://drive.google.com/drive/u/1/folders/1yyfT07LkHiTiTSDzTLVNS8aqF4tB8ayw",
    natural: "https://drive.google.com/drive/u/1/folders/1vx4zukRYU0NDRtSCRcUQX8RZv1l1YJcP",
    group: "https://drive.google.com/drive/u/1/folders/1H7I1lJcHW1U8bXnzYkkJPZqXB6ubrcKS"
};

// Category names hiển thị
const categoryNames = {
    all: "Nổi bật",
    portrait: "Chân dung",
    natural: "Tự nhiên",
    group: "Nhóm nhỏ"
};

// Hàm render portfolio grid
function renderPortfolio(category = 'all') {
    portfolioGrid.innerHTML = '';
    
    // Lấy 3 ảnh đầu tiên của category
    const items = albumData[category] || albumData.all;
    
    // Render 3 ảnh
    items.slice(0, 3).forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" 
                 alt="${item.title}" 
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/500x400/202020/00BFFF?text=${encodeURIComponent(item.title)}'; this.onerror=null;">
            <div class="portfolio-overlay">
                <div class="portfolio-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.link}" class="view-album-btn" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Xem album
                    </a>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Render ô thứ 4 - Xem toàn bộ album
    const albumItem = document.createElement('div');
    albumItem.className = 'portfolio-item album-item';
    albumItem.innerHTML = `
        <div class="album-icon">
            <i class="fas fa-images"></i>
        </div>
        <h3>Xem toàn bộ album</h3>
        <p>Khám phá tất cả ảnh ${categoryNames[category]} trên Google Drive</p>
        <a href="${categoryLinks[category]}" class="view-album-btn" target="_blank">
            <i class="fab fa-google-drive"></i> Xem toàn bộ album
        </a>
    `;
    portfolioGrid.appendChild(albumItem);
}

// Xử lý click category tabs
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class từ tất cả buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class cho button được click
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        renderPortfolio(category);
        
        // Cập nhật active state cho navigation
        document.querySelectorAll('.main-nav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        document.querySelector('.main-nav a[href="#work"]').classList.add('active');
    });
});

// ========== BOOKING FORM ==========
const bookingForm = document.getElementById('bookingForm');
const bookBtns = document.querySelectorAll('.book-btn');

bookBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.dataset.service;
        
        // Scroll to contact form and set service
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const select = bookingForm.querySelector('select');
            select.value = service;
            select.dispatchEvent(new Event('change'));
        }, 500);
    });
});

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector('select').value;
    
    // Validate
    if (!name || !phone || !service) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
        return;
    }
    
    // Show success message
    const serviceNames = {
        'g1': 'Gói Cá nhân/Bạn bè',
        'g2': 'Gói Bổ sung kỷ yếu',
        'g3': 'Gói Theo ngày'
    };
    
    alert(`✅ Đặt lịch thành công!\n\nCảm ơn bạn ${name} đã đặt lịch!\nGói dịch vụ: ${serviceNames[service]}\nTôi sẽ liên hệ với bạn qua số ${phone} trong vòng 24 giờ.`);
    
    // Reset form
    this.reset();
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Cập nhật active nav link
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// ========== ACTIVE NAVIGATION ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// ========== BACK TO TOP ==========
const backToTopBtn = document.getElementById('backToTop');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Portfolio Nhat Mel đã sẵn sàng!');
    
    // Render portfolio ban đầu
    renderPortfolio('all');
    
    // Set active nav link
    document.querySelector('.main-nav a[href="#work"]').classList.add('active');
    
    // Thêm keyboard navigation cho slider
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
    
    // Thêm tooltip cho các link
    const tooltips = [
        { selector: '.view-album-btn', text: 'Mở album Google Drive' },
        { selector: '.book-btn', text: 'Đăng ký gói dịch vụ này' },
        { selector: '.social-link', text: 'Mở mạng xã hội' },
        { selector: '.phone-link', text: 'Gọi điện ngay' }
    ];
    
    tooltips.forEach(({ selector, text }) => {
        document.querySelectorAll(selector).forEach(el => {
            el.title = text;
        });
    });
});