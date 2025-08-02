// Exibe animações ao rolar a página
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
  observer.observe(el);
});
// Carrossel de imagens
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slideImages = slidesContainer.querySelectorAll('img');
const totalSlides = slideImages.length;

function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}
// Avançar e voltar
document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateCarousel();
});
document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});
// Troca automática a cada 5s
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateCarousel();
}, 5000);

