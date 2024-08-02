console.log('Não funcionou da maneira que deveria funcionar, pois ao clicar em algum botão, não aparece as outras caixas de texto.')

const avanca = document.querySelectorAll('.btn-prox')

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo')
        const proxPasso = 'passo-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementById('proxPasso').classList.add('.ativo')
    })
}

)