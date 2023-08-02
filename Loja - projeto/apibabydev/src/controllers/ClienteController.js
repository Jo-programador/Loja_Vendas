const ClienteService = require('../services/ClienteService');

module.exports = {
    readyCliente: async (req, res) => {
        let json = { error: "", result: [] };

        let clientes = await ClienteService.searchCliente();

        for (let i in clientes) {
            json.result.push({
                idUsuario: clientes[i].idUsuario,
                nome: clientes[i].nome,
                cpf: clientes[i].cpf,
                email: clientes[i].email,
                telefone: clientes[i].telefone,
                endereco: clientes[i].endereco,
                cidade: clientes[i].cidade,
                uf: clientes[i].uf,
                cep: clientes[i].cep,
            });
        }
        res.header("Access-Control-Allow-Origin", "*");        
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.json(json);
    },
    createCliente: async (req, res) => {
        let json = { error: "", result: [] };

        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let endereco = req.body.endereco;
        let cidade = req.body.cidade;
        let uf = req.body.uf;
        let cep = req.body.cep;

        let cliente = await ClienteService.createCliente(nome, cpf, email, telefone, endereco, cidade, uf, cep);

        json.result = {
            codigo: cliente,
            nome,
            cpf,
            email,
            telefone,
            endereco,
            cidade,
            uf,
            cep,
        };
        res.header("Access-Control-Allow-Origin", "*");        
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.json(json);
    },
    updateCliente: async (req, res) => {
        let json = {error: '', result:{}}

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let endereco = req.body.endereco;
        let cidade = req.body.cidade;
        let uf = req.body.uf;
        let cep = req.body.cep;

        if (codigo && nome && cpf && email && telefone && endereco && cidade && uf && cep) {
            await ClienteService.updateCliente(codigo, nome, cpf, email, telefone, endereco, cidade, uf, cep);

            json.result = {
                codigo,
                nome,
                cpf,
                email,
                telefone,
                endereco,
                cidade,
                uf,
                cep
            };
        }
        res.header("Access-Control-Allow-Origin", "*");        
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.json(json);
    },
    deleteCliente: async (req, res) => { 
        let json = {error : '', result: {}};

        codigo = req.params.codigo;
        
    }
}