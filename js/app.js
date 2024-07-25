let amigos = []; //array vazia 

//adicionar nome na lista
function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    //verificar o campo vazio
    if(amigo.value.trim() === ''){
        alert('Digite o nome do amigo');
        return; //interrompe a execução da função se o campo estiver vazio
    }

    //verificar se o nome ja esta na lista
    if(amigos.includes(amigo.value.trim())){
        alert('Esse amigo ja esta na lista');
        amigo.value = ''; //limpa o campo de entrada
        return; //interrompe a execução da função se o nome ja estiver na lista
    }

    amigos.push (amigo.value.trim()); //adicionar os amigos no array

    if (lista.textContent ==''){
        lista.textContent = amigo.value;
        }else{
            lista.textContent = lista.textContent + ', ' + amigo.value;
        }
        amigo.value = '';
    
        atualizarLista();
        atualizarSorteio();
    
}

//sortear os nomes
function sortear(){
    embaralha(amigos); 

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function excluirAmigo(index){
    amigos.splice(index, 1); //remove o amigo do array.splice
    atualizarLista();
    atualizarSorteio();
}


//embaralhar um array
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio (){
    
    let sorteio = document.getElementById('lista-sorteio');
    lista.innerHTML = '';

}


function atualizarLista (){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        //Cria um elemento de paragrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        //Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function(){
            excluirAmigo(i);
        });

        //Adiciona o paragrafo na lista
        lista.appendChild(paragrafo);
    }
}


//reiniciar o programa
function reiniciar (){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}