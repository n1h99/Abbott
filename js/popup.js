// registration three
var modalFrut = document.getElementsByClassName("btn__further-modal")[0];

var btnFrut = document.getElementsByClassName("btn__further")[0];

var closeFrut = document.getElementsByClassName("btn__modal-close")[0];

btnFrut.onclick = function() {
    modalFrut.style.display = "block";
}

closeFrut.onclick = function() {
    modalFrut.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalFrut) {
        modalFrut.style.display = "none";
    }
}
