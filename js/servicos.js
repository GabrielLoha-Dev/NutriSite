window.addEventListener("load", () => {
    const elemento = document.getElementById("menu_servicos");
    const alturaInicial = elemento.offsetHeight; // Captura a altura inicial renderizada
    elemento.style.height = `${alturaInicial}px`; // Define como altura fixa
  });
  