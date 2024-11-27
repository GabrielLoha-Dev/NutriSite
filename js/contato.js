document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const assunto = document.getElementById("motivo").value;
    // Obtém a data atual
    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.getDate().toString().padStart(2, '0')}/${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}/${dataAtual.getFullYear()}`;
    const horaMinuto = `${dataAtual.getHours().toString().padStart(2, '0')}:${dataAtual.getMinutes().toString().padStart(2, '0')}`;
    const whatsappURL = `https://api.whatsapp.com/send?text=*Selena%20Soares%20%7C%20Nutricionista*%0A*-------------------------------*%0A%0A*Nome%3A%20${encodeURIComponent(name)}*%0A*Assunto%3A%20${encodeURIComponent(assunto)}*%0A*Data%3A%20${encodeURIComponent(dataFormatada)}*%0A*Horário%3A%20${encodeURIComponent(horaMinuto)}*%0A%0A*-------------------------------*%0A%0A${encodeURIComponent(message)}`;



    window.open(whatsappURL, "_blank");
});
