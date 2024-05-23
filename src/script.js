function addButton() {
    // Obtém todos os elementos com a classe "add-button"
    let buttons = document.querySelectorAll(".add-button");
    
    // Para cada botão encontrado
    buttons.forEach(button => {
        // Adiciona um ouvinte de evento de clique
        button.addEventListener("click", function() {
            // Obtém o próximo elemento irmão com a classe "add-menu"
            let menu = this.nextElementSibling;
            
            // Alterna a exibição do menu
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        });
    });
}

window.onload = addButton;

clearInput = () => {

let input = document.getElementById("insert-link");

    input.value = "";

}


addVideo = (e) => {
    let input = document.getElementById("insert-link");
    let link = input.value;
    let iframe = document.getElementById("iframeId");
    
    if(e.keyCode === 13){
        // Extrai o ID do vídeo do link do YouTube
        var video_id = link.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }

        // Constrói o URL do iframe
        var iframe_url = "https://www.youtube.com/embed/" + video_id;

        // Define o src do iframe
        iframe.src = iframe_url;
    }

    clearInput();
}



