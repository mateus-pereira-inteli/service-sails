/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async function(req, res) {
        const users = await User.find();
        return res.view('pages/users', {
            users: users
        });
    },

    create: async function(req, res) {
        try {
            const { name, email, cpf, password } = req.body;

            //Valida os campos no Helper
            const status = await sails.helpers.formatInputs.with({ name, email, cpf, password });

            //Atualizar o campo formatado e recebido pelo Helper
            req.body.cpf = status.cpf;

            //Cria o usuário no banco de dados
            const user = await User.create(req.body).fetch();
            return res.view('pages/created')
        } catch (err) {
            return res.serverError(err);
        }
    }
};
