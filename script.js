let newplay;
newplay = document.getElementById('vM1')

function playVideo(name) {
    let src = document.getElementById(name)
    let play = src.getAttribute("src")
    newplay.setAttribute("src", play)
    newplay.setAttribute("autoplay", "")

}


function playBtn() {
    let custom = document.getElementById('customLink')
    let link = custom.value
    newplay.setAttribute("src", link)
}


