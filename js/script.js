/*
    STICKY MENU
*/
window.onscroll = function () {
  myFunction();
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

/*
  DESAFIO 2
*/

/*
  SOLICITANDO API
*/

function buscarEndereco() {
  const cep = document.getElementById("cepInput").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        salvarRegistro(data);
      } else {
        alert("CEP não encontrado.");
      }
    })
    .catch((error) => {
      alert("Ocorreu um erro na busca do CEP.");
      console.error(error);
    });
}

/*
  ARMAZENANDO DADOS NO NAVEGADOR
*/

function salvarRegistro(registro) {
  let registros = localStorage.getItem("registros")
    ? JSON.parse(localStorage.getItem("registros"))
    : [];
  registros.push(registro);
  localStorage.setItem("registros", JSON.stringify(registros));
  mostrarRegistros();
}

/*
  EXIBINDO DADOS NA TABELA
*/

function mostrarRegistros() {
  const registros = JSON.parse(localStorage.getItem("registros"));
  const registrosContainer = document.getElementById("registros");
  registrosContainer.innerHTML = "";

  if (registros) {
    registros.forEach((registro, index) => {
      const row = `<tr>
                        <td>${registro.cep}</td>
                        <td>${registro.logradouro}</td>
                        <td>${registro.bairro}</td>
                        <td>${registro.localidade}</td>
                        <td>${registro.uf}</td>
                        <td><button class="btn-apagar" onclick="removerRegistro(${index})">X</button></td>
                    </tr>`;
      registrosContainer.innerHTML += row;
    });
  }
}

mostrarRegistros();

/*
  ORDENAÇÃO DE CAMPOS A-Z
*/

function ordenarRegistros(campo, ordem) {
  let registros = JSON.parse(localStorage.getItem("registros"));
  if (registros) {
    registros.sort((a, b) => {
      if (ordem === "crescente") {
        return a[campo].localeCompare(b[campo]);
      } else {
        return b[campo].localeCompare(a[campo]);
      }
    });
    localStorage.setItem("registros", JSON.stringify(registros));
    mostrarRegistros();
  }
}

/*
  APAGAR CAMPOS
*/

function removerRegistro(index) {
  let registros = JSON.parse(localStorage.getItem("registros"));

  if (registros) {
    registros.splice(index, 1);
    localStorage.setItem("registros", JSON.stringify(registros));
    mostrarRegistros();
  }
}
