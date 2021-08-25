'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  const itemToLookup = request.params.item;
  try {
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
  } catch (error) {
    response.status(500);
  }
};

module.exports = (app) => {
  app.get('/users/age/:item', getListOfAgesOfUsersWithHandler);
};
