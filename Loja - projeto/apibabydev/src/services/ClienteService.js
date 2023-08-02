const database = require('../database');

module.exports = {
    searchCliente: () => {
        return new Promise((accepted, rejected) => {
            database.query("SELECT * FROM usuario", (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                accepted(results);
            });
        });
    }, 
    createCliente: (nome, cpf, email, telefone, endereco, cidade, uf, cep) => {
        return new Promise((accepted, rejected) => {
            database.query(`INSERT INTO usuario (nome, cpf, email, telefone, endereco, cidade, uf, cep) VALUES ('${nome}', '${cpf}', '${email}', '${telefone}', '${endereco}', '${cidade}', '${uf}', '${cep}')`, 
            (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }
                accepted(results);
            });
        });
    },
    updateCliente: (codigo, nome, cpf, email, telefone, endereco, cidade, uf, cep) => {
        return new Promise((accepted, rejected) => {
            database.query(
                `UPDATE usuario SET nome = '${nome}', cpf = '${cpf}', email = '${email}', telefone = '${telefone}', endereco = '${endereco}', cidade = '${cidade}', uf = '${uf}', cep = '${cep} WHERE idUsuario = ${codigo}`,
                (error, results) => {
                    if (error) {
                        rejected(error);
                        return;
                    }
                    accepted(results);
                });
        });
    },
    deleteCliente: (codigo) => {
        return new Promise((accepted, rejected) => {
            database.query(`DELETE FROM usuario WHERE idUsuario = ${codigo}`, (error, results) => {
            if (error) {
                rejected(error);
                return;
            }
            accepted(results);
            });
        });
    }
}