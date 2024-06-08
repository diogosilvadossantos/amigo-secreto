let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");

  // amigos.push(amigo.value);
  let nomeAmigo = amigo.value.toLowerCase();

  if (amigo.value == "") {
    alert("Insira o nome do amigo");
  } else if (amigos.map((a) => a.toLowerCase()).includes(nomeAmigo)) {
    alert("O nome do amigo já foi adicionado");
    return;
  } else if (lista.textContent == "") {
    amigos.push(amigo.value);
    lista.textContent = amigo.value;
  } else {
    amigos.push(amigo.value);
    lista.textContent = lista.textContent + ", " + amigo.value;
  }
  amigo.value = "";

  atualizarLista();
  atualizarSorteio();
}

function sortear() {
  if (amigos.length <= 3 || amigos.length % 2 !== 0) {
    alert("Adicione um número par de amigos, pelo menos 4");
    return;
  }

  embaralhar(amigos);

  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br/>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br/>";
    }
  }
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

function excluirAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
  atualizarSorteio();
}

function atualizarSorteio() {
  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";
}

function atualizarLista() {
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    // Cria um elemento de parágrafo para cada amigo
    let paragrafo = document.createElement("p");
    paragrafo.textContent = amigos[i];

    // Adiciona um evento de clique para excluir o amigo
    paragrafo.addEventListener("click", function () {
      excluirAmigo(i);
    });

    // Adiciona o parágrafo à lista
    lista.appendChild(paragrafo);
  }
}
