// Função para criptografar o texto

function criptografar() {
    let texto = document.getElementById("texto").value;
    let tituloDaMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let mago = document.getElementById("mago");
    let resultado = document.getElementById("resultado");

    let textoCriptografado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "ines")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length !== 0) {
        resultado.value = textoCriptografado;
        tituloDaMensagem.textContent = "Seu texto criptografado";
        paragrafo.textContent = "";
        mago.src = "./img/mago.jpg";
        document.getElementById("texto").value = "";                   // Limpar a área do texo
    } else {
        mago.src = "./img/MAGO_resized.jpg";
        tituloDaMensagem.textContent = "Nenhum texto encontrado";
        paragrafo.textContent = "Escreva o texto que desejar criptografar";
    }
}

// Função para descriptografar o texto

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloDaMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let mago = document.getElementById("mago");
    let resultado = document.getElementById("resultado");

    let textoDescriptografado = texto
        .replace(/enter/gi, "e")
        .replace(/ines/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !== 0) {
        resultado.value = textoDescriptografado;
        tituloDaMensagem.textContent = "Seu texto descriptografado";
        paragrafo.textContent = "";
        mago.src = "./img/feliz.jpg";
        document.getElementById("texto").value = "";                   // Limpar a área do texto
    } else {
        mago.src = "./img/MAGO_resized.jpg";
        tituloDaMensagem.textContent = "Nenhum texto encontrado";
        paragrafo.textContent = "Escreva o texto que desejar criptografar";
    }
}

function copiar() {
    let resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    
    document.getElementById("texto").value = "";
}