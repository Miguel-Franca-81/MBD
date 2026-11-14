document.addEventListener('DOMContentLoaded', () => {
    // ================= MENU PRINCIPAL E DROPDOWN (index.html) =================
    const btnMenuPrincipal = document.getElementById('btn-menu-principal');
    const menuLista = document.getElementById('menuver');
    const btnAula3 = document.getElementById('btn-aula3');
    const submenuAula3 = document.getElementById('submenu-aula3');

    // Abre/fecha o menu inteiro ao clicar no ícone hambúrguer (☰)
    if (btnMenuPrincipal && menuLista) {
        btnMenuPrincipal.addEventListener('click', () => {
            menuLista.classList.toggle('recolhido');
        });
    }

    // Abre/fecha os comandos da Aula 3
    if (btnAula3 && submenuAula3) {
        btnAula3.addEventListener('click', (event) => {
            event.preventDefault();
            btnAula3.classList.toggle('aberto');
            submenuAula3.classList.toggle('aberto');
        });
    }

    // ================= NAVEGAÇÃO ENTRE ABAS (select.html) =================
    const links = document.querySelectorAll('.menu-link');
    const secoes = document.querySelectorAll('.secao-sql');

    function ativarSecao(alvoId) {
        const secaoAlvo = document.querySelector(alvoId);
        if (!secaoAlvo) return;

        secoes.forEach(secao => secao.classList.remove('ativa'));
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === alvoId) {
                link.classList.add('active');
            }
        });

        secaoAlvo.classList.add('ativa');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const alvoId = this.getAttribute('href');
            history.pushState(null, '', alvoId);
            ativarSecao(alvoId);
        });
    });

    if (window.location.hash) {
        ativarSecao(window.location.hash);
    }

    // ================= BOTÃO COPIAR CÓDIGO (select.html) =================
    const blocosCodigo = document.querySelectorAll('.bloco-codigo');
    blocosCodigo.forEach(bloco => {
        const codeElement = bloco.querySelector('code');
        const btnCopiar = document.createElement('button');
        btnCopiar.className = 'btn-copiar';
        btnCopiar.textContent = 'Copiar';

        btnCopiar.addEventListener('click', () => {
            navigator.clipboard.writeText(codeElement.textContent).then(() => {
                btnCopiar.textContent = 'Copiado!';
                setTimeout(() => {
                    btnCopiar.textContent = 'Copiar';
                }, 1500);
            });
        });

        bloco.appendChild(btnCopiar);
    });
});