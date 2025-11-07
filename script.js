document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById('frase');

  function checkScroll() {
    const windowBottom = window.scrollY + window.innerHeight;
    const imgTop = img.offsetTop;

    if (windowBottom > imgTop + 100) { // começa a animar antes de chegar ao topo
      img.classList.add('show');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // roda ao carregar a página
});

