console.log("Quora Blur Remover extension loaded");
const isQuora = window.location.origin.indexOf('quora.com') !== -1;
// Função para remover o filtro blur
function removeBlur() {
  var elements = document.querySelectorAll("[style*='blur']");
  elements.forEach(function (element) {
    element.style.filter = "none";
  });
  // procurar todos elementos com a classe unzoomed e remover a classe
  var unzoomed = document.querySelectorAll(".unzoomed");
  unzoomed.forEach(function (element) {
    element.classList.remove("unzoomed");
  });
}

// Use o MutationObserver para detectar novos elementos no DOM
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length > 0) {
      // Novos elementos foram adicionados, execute a função
      removeBlur();
    }
  });
});

if ( isQuora)  {
  observer.observe(document, { childList: true, subtree: true });
  removeBlur();
}
