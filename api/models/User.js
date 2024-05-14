/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: "users",
    attributes: {
        name: {
            type: 'string',
            required: true,
            maxLength: 50,
        },
        email: {
            type: 'string',
            required: true,
            maxLength: 200,
            unique: true,
            isEmail: true,
        },
        cpf: {
            type: 'string',
            required: true,
            maxLength: 11,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
            protect: true,
        },
        createdAt: {
            type: 'number',
            autoCreatedAt: true,
        },
        updatedAt: {
            type: 'number',
            autoUpdatedAt: true,
        },
    },

};
