function openLightbox(imageUrl) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-image').src = imageUrl;
  }
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  