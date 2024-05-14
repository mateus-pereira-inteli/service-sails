module.exports = {

    friendlyName: 'Format inputs',
    description: '',


    inputs: {
        name: {
            type: "string",
            required: true,
        },
        email: {
            type: "string",
            required: true
        },
        cpf: {
            type: "string",
            required: true
        },
        password: {
            type: "string",
            required: true,
        },
    },

    exits: {
        success: {
            description: 'Success'
        },
        invalid: {
            description: 'Formulário inválido.',
            responseType: 'badRequest'
        }
    },


    fn: async function(inputs, exits) {
        //Validar Se os campos são Strings
        if (typeof(inputs.name) != 'string') {
            return exits.invalid("O campo Nome não é uma string");
        }
        if (typeof(inputs.email) != 'string') {
            return exits.invalid("O campo E-mail não é uma string");
        }
        if (typeof(inputs.cpf) != 'string') {
            return exits.invalid("O campo CPF não é uma string");
        }
        if (typeof(inputs.password) != 'string') {
            return exits.invalid("O campo Senha não é uma string");
        }

        //Retirar caracteres especiais e espaços do CPF
        var cpf = inputs.cpf.replace(/[^a-zA-Z0-9]/g, '');

        return exits.success({ cpf: cpf });
    }


};
