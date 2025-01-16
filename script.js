// Smooth scroll to the gallery
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Scroll back to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
