const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Seleciona o elemento que está visível no momento
        const atual = document.querySelector('.ativo');
        
        // Pega o número do próximo passo do atributo data-proximo do botão clicado
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a visibilidade do passo atual
        atual.classList.remove('ativo');
        
        // Adiciona a visibilidade ao novo passo baseado no ID
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
