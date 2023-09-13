'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john@email.com',
          uuid: '35cf1b89-56d3-433c-9f43-4198eb3725de',
          role: 'admin',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z',
        },
        {
          name: 'Jane Doe',
          email: 'jane@email.com',
          uuid: 'a7a1dfd0-7d16-4405-8900-27266af416a8',
          role: 'user',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z',
        },
        {
          name: 'Paul begley',
          email: 'jane@email.com',
          uuid: 'b91a9970-17e5-40f3-8b5a-8d6cacd48704',
          role: 'admin',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z',
        },
        {
          name: 'William jose',
          email: 'jane@email.com',
          uuid: '65cb4144-1b6d-4c84-a154-b51e486742c7',
          role: 'user',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z',
        },
        {
          name: 'Stephanie Fisher',
          email: 'jane@email.com',
          uuid: '2db7f8d8-b7e3-42d0-af14-0fd0c912f645',
          role: 'admin',
          createdAt: '2020-11-01T16:30:07.592Z',
          updatedAt: '2020-11-01T16:30:07.592Z',
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  }
};
