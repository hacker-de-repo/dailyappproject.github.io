
// ==UserScript==
// @name        Medium: remove location hash
// @namespace   http://efcl.info/
// @description Remove location hash from medium
// @include     https://medium.com/*#*
// @version     1
// @grant       none
// ==/UserScript==

function removeLocationHash(){
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL) 
}
window.addEventListener("popstate", function(event){
    removeLocationHash();
});
window.addEventListener("hashchange", function(event){
    event.preventDefault();
    removeLocationHash();
});
window.addEventListener("load", function(){
    removeLocationHash();
});
function clicou() {
    alert("funcionou");
}
jQuery(document).ready(function() {
    // Exibe ou oculta o botão
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.voltar-ao-topo').fadeIn(200);
        } else {
            jQuery('.voltar-ao-topo').fadeOut(200);
        }
    });
    
    // Faz animação para subir
    jQuery('.voltar-ao-topo').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 300);
    })
});
