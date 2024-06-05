function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");

  if (amigo.value == "") {
    alert("Insira o nome do amigo");
  } else if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }
  amigo.value = "";
}
