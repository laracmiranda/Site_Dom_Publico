// Ao carregar a página, buscar as fotos salvas
document.addEventListener('DOMContentLoaded', carregarFotosSalvas);

function handleFotoSelecionada(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        adicionarFotoNaGaleria(e.target.result);
        salvarFoto(e.target.result); // Salvar a imagem no localStorage
    };
    reader.readAsDataURL(file);
}

function adicionarFotoNaGaleria(srcImagem) {
    const fotosGrid = document.getElementById('fotosGrid');

    const novaFoto = document.createElement('div');
    novaFoto.classList.add('foto-card');
    novaFoto.setAttribute('data-aos', 'fade-up');

    novaFoto.innerHTML = `
        <img src="${srcImagem}" alt="Foto">
        <div class="foto-overlay">
            <div class="compartilhar" onclick="compartilharNoInstagram('${srcImagem}')">
                <img src="../Projeto/Imagens/instagram-icon.png" alt="Instagram">
                <span>Compartilhar</span>
            </div>
        </div>
    `;

    fotosGrid.appendChild(novaFoto);
    AOS.refresh(); // Atualiza as animações
}

function compartilharNoInstagram(urlImagem) {
    const textoCompartilhamento = encodeURIComponent("Olha essa foto incrível que encontrei!");
    const linkImagem = encodeURIComponent(urlImagem);

    const urlInstagram = `https://www.instagram.com/`; // Redireciona para o Instagram

    // Abre o Instagram em nova aba
    window.open(urlInstagram, '_blank');

    // Copia o link da URL da imagem também
    navigator.clipboard.writeText(urlImagem).then(() => {
        alert("Link da imagem copiado! Agora cole no seu Instagram.");
    }).catch(err => {
        console.error('Erro ao copiar o link', err);
    });
}

function salvarFoto(base64Imagem) {
    let fotosSalvas = JSON.parse(localStorage.getItem('fotosGaleria')) || [];
    fotosSalvas.push(base64Imagem);
    localStorage.setItem('fotosGaleria', JSON.stringify(fotosSalvas));
}

function carregarFotosSalvas() {
    const fotosSalvas = JSON.parse(localStorage.getItem('fotosGaleria')) || [];
    fotosSalvas.forEach(foto => {
        adicionarFotoNaGaleria(foto);
    });
}
