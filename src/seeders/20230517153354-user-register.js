'use strict';
const {encrypt} = require("../utils/handleBcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("users", [
            {
                username: "test1",
                email: "test1@test.com",
                password: await encrypt("1234")
            },
            {
                username: "test2",
                email: "test2@test.com",
                password: await encrypt("1111")
            },
            {
                username: "test3",
                email: "test3@test.com",
                password: await encrypt("2222")
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
