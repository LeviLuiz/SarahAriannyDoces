/*let nome = prompt('Qual o seu nome?')
alert(`Olá ${nome}. Seja bem-vindo!`)*/
document.addEventListener('keydown', function(event) {
    //console.log(`Tecla pressionada: ${event.key}, Código: ${event.code}`);


    if (event.key === 'Enter') {
        buscar()
    }
});


let botão = document.getElementById('buscar')
let texto = document.getElementById('busca')
let select = document.getElementById('select')
let produtos = ['alfajor', 'beijinho', 'bem-casado', 'brownie', 'chocotone', 'cupcake', 'dindin', 'doce de leite', 'donut', 'jujuba', 'musse', 'pao', 'picole', 'pudim', 'sorvete']
let pro = ['biscoito', 'bolo', 'brigadeiro', 'pipoca', 'panetone']

botão.style.cursor = 'pointer'

function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

function buscar() {
    let escrito = texto.value.trim().toLowerCase();
    let v1 = document.getElementById(1)
    let v2 = document.getElementById(2)
    let v3 = document.getElementById(3)
    let v4 = document.getElementById(4)

    texto.value = escrito;


    if (escrito == pro[1]) {
        v1.text = 'Inteiro'
        v2.text = 'Parte'
    } else if (escrito == pro[2]) {
        v1.text = 'Normal'
        v2.text = 'Leite em pó'
    } else if (escrito == pro[0]) {
        v1.text = 'Normal'
        v2.text = 'Maisena'
    } else if (escrito == pro[3]) {
        v1.text = 'Caramelo'
        v2.text = 'Chocolate'
        v3.text = 'Leite Condensado'
        v4.text = 'Leite em Pó'
    } else if (escrito == pro[4]) {
        v1.text = 'Panetone'
        v2.text = 'Chocotone'
    } else {
        alert('Verifique os dados e tente novamente')
    }

    console.log(escrito)
    
    if (pro.value != -1) {
        console.log('Erro')
    } else {
        console.log(pro.indexOf())
    }

    select.innerHTML = ''

    select.appendChild(v1)
    select.appendChild(v2)
    select.appendChild(v3)
    select.appendChild(v4)
}

function lista() {
    lista = document.getElementById('select')

    for (c = 0; c <= 15; c++) {
        option = document.createElement('option')
        option.id = c

        option.text = produtos[c]
        lista.appendChild(option)
        console.log(c)

    }

    for (c = 0; c <= 4; c++) {
        option = document.createElement('option')
        option.id = c

        option.text = pro[c]
        lista.appendChild(option)
        console.log(c)

    }
}

lista()