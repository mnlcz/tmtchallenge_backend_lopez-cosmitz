'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("posts", [
            {
                username: "test1",
                title: "first post using seeds",
                creationdate: new Date(),
                content: "bla bla bla number 1"
            },
            {
                username: "test1",
                title: "second post using seeds",
                creationdate: new Date(),
                content: "bla bla bla number 2"
            },
            {
                username: "test1",
                title: "third post using seeds",
                creationdate: new Date(),
                content: "bla bla bla number 3"
            },
            {
                username: "test2",
                title: "post title 1",
                creationdate: new Date(),
                content: "bla bla bla"
            },
            {
                username: "test3",
                title: "random title",
                creationdate: new Date(),
                content: "bla bla bla random"
            }
        ])
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
