const url = "http://localhost:3030/api"

function createCliente() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;
    let cep = document.getElementById("cep").value;

    const data = {
        "nome": nome,
        "cpf": cpf,
        "email": email,
        "telefone": telefone,
        "endereco": endereco,
        "cidade": cidade,
        "uf": uf,
        "cep": cep
    }

    axios.post(`${url}/cliente`, data)
        .then(response => {
            console.log(response.data.result)
        })
        .catch(error => console.log(error))
}

function updateCliente() {
    let codigo = document.getElementById("codigo").value;
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let uf = document.getElementById("uf").value;
    let cep = document.getElementById("cep").value;

    const data = {
        "nome": nome,
        "cpf": cpf,
        "email": email,
        "telefone": telefone,
        "endereco": endereco,
        "cidade": cidade,
        "uf": uf,
        "cep": cep
    }

    axios.put(`${url}/cliente/${codigo}`, data)
        .the((response) => {
            console.log(response.message)
        })
        .catch((error) => console.log(error))
}

function getClientes() {
    axios.get(`${url}/clientes`)
        .then(response => {
            const data = response.data.result

            let html = ''

            for (let i = 0; i < data.lenght; i++) {
                html += `<tr>
                <th scope="row">${data[i].idUsuario}</th>
                    <td>${data[i].nome}</td>
                    <td>${data[i].cpf}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].telefone}</td>
                    <td>${data[i].endereco}</td>
                    <td>${data[i].cidade}</td>
                    <td>${data[i].uf}</td>
                    <td>${data[i].cep}</td>
                <button type="button" class="btn btn-success" onclick="redirect('${data[i].idUsuario}', '${data[i].nome}', '${data[i].cpf}', '${data[i].email}', '${data[i].telefone}', '${data[i].endereco}', '${data[i].uf}', '${data[i].cep}')">Editar</button></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteAluno(${data[i].idUsuario})">Excluir</button></td>
                </tr>`
            }

            document.getElementById("table-body").innerHTML = html

            console.log(data)
        })
    .catch(error => console.log(error))
}