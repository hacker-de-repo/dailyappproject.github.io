$(document).ready(function() {
    $('.subir').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
document.querySelector('html').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}