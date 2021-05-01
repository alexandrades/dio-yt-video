function getVideoLink( iframeSrc ) {

    // Remove a URL do primeiro caracter até a primeira posição do código do vídeo.
    let videoCode = iframeSrc.replace('https://www.youtube.com/embed/', '')
    return `https://www.youtube.com/watch?v=${videoCode}`
}

function setPlayFlag() {
    playFlag = !playFlag
}

function addLink() {

    // Obtém os elementos o h6 do cabeçalho e o iframe do vídeo para o YT
    const playerPoster = document.querySelector('.title').lastElementChild.lastElementChild.lastElementChild
    const iframeSrc = document.querySelector("iframe[id^='ytc']")
    
    // Adiciona um link no H6 com a cor verde que abre o vídeo no YT
    if (iframeSrc != null) {

        playerPoster.innerHTML = `<a href="${getVideoLink(iframeSrc.attributes.src.value)}", target="_blank" style="color: #2ae033"><but>${playerPoster.innerHTML}</but></a>`

    }

}

// Atualiza o link a cada 1 segundo 
setInterval(() => {
    addLink()
}, 1000)
    