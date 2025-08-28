// Modal for book sample
function openSampleModal(book) {
    const modal = document.getElementById('sample-modal');
    const modalTitle = document.getElementById('modal-title');
    const sampleContent = document.getElementById('sample-content');

    modalTitle.textContent = book === 'whispers' ? 'Whispers in the Wind - Sample' : 'Book Sample';
    sampleContent.innerHTML = book === 'whispers' 
        ? '<h4>Chapter One</h4><p>The wind howled through the glen, carrying whispers of ancient secrets...</p>'
        : '<p>Sample content not available.</p>';

    modal.style.display = 'block';
}

function closeSampleModal() {
    document.getElementById('sample-modal').style.display = 'none';
}

// Gallery lightbox
const galleryImages = [
    '<img src="adrian-gaede-nF5xRshqItY-unsplash.jpg" alt="Book Signing Event" style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; object-fit: contain;">',
    '<img src="ahmed-slimene-oAil5UHXYRE-unsplash.jpg" alt="Writing Retreat" style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; object-fit: contain;">',
    '<img src="dong-xie-K4mCK1W9mEs-unsplash.jpg" alt="Literary Conference" style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; object-fit: contain;">',
    '<img src="jonathan-borba-bUXad2FH878-unsplash.jpg" alt="Award Ceremony" style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; object-fit: contain;">',
    '<img src="klim-musalimov-s2TJUe3LOuA-unsplash.jpg" alt="Radio Interview" style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; object-fit: contain;">',
    '<img src="mitchell-soeharsono-H5SAHtXa7Ao-unsplash.jpg" alt="Book Launch" style="width: 100%; max-width: 800px; height: auto; border-radius: 10px; object-fit: contain;">'
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.innerHTML = galleryImages[index];
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightbox-image').innerHTML = galleryImages[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('lightbox-image').innerHTML = galleryImages[currentImageIndex];
}

// Quote navigation
const quotes = [
    { text: "Every story we tell is a piece of our soul shared with the world.", author: "- Sarah Mitchell" },
    { text: "In the pages of a book, we find the courage to dream.", author: "- Sarah Mitchell" },
    { text: "Words have the power to heal, inspire, and transform.", author: "- Sarah Mitchell" }
];

let currentQuoteIndex = 0;

function updateQuote() {
    document.getElementById('quote-text').textContent = quotes[currentQuoteIndex].text;
    document.getElementById('quote-author').textContent = quotes[currentQuoteIndex].author;
}

function previousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    updateQuote();
}

// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('mobile-menu');
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('sample-modal');
    if (event.target === modal) {
        closeSampleModal();
    }
    
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        closeLightbox();
    }
});
