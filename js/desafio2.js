/*
    METHOD 2
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

function salvarRegistro(registro) {
  let registros = localStorage.getItem("registros")
    ? JSON.parse(localStorage.getItem("registros"))
    : [];
  registros.push(registro);
  localStorage.setItem("registros", JSON.stringify(registros));
  mostrarRegistros();
}

function mostrarRegistros() {
  const registros = JSON.parse(localStorage.getItem("registros"));
  const registrosContainer = document.getElementById("registros");
  registrosContainer.innerHTML = "";

  if (registros) {
    registros.forEach((registro) => {
      const row = `<tr>
                              <td>${registro.cep}</td>
                              <td>${registro.logradouro}</td>
                              <td>${registro.bairro}</td>
                              <td>${registro.localidade}</td>
                              <td>${registro.uf}</td>
                          </tr>`;
      registrosContainer.innerHTML += row;
    });
  }
}

mostrarRegistros();
