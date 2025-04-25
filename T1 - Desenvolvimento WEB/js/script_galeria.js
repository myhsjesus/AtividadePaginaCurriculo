window.onscroll = function() { scrollFunction(); };

window.onload = function() {
    alert("Seja bem-vindo(a) à página galeria do meu currículo!");
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function mensagem() {
    alert("Olá! Me chamo Mariana, sou apaixonada por tecnologia e estou estudando Ciência de Dados com muita dedicação. Meu objetivo é me profissionalizar cada vez mais!)");
}