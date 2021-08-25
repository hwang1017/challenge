'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    let itemsByName = db.itemsOfUserByUsername;
    let usersList = db.usersById;
    const map = new Map();

    Object.values(usersList).forEach(({ username, age }) => {
      if (itemsByName[username].includes(item)) {
        if (map.has(age)) {
          map.set(age, map.get(age) + 1);
        } else {
          map.set(age, 1);
        }
      }
    });

    let res = Array.from(map);

    res.sort((a, b) => a[0] - b[0]);

    return res;
  };
  return mockDBCall(dataAccessMethod);
};

const getItems = () => {
  const itemsSet = new Set();

  const dataAccessMethod = () => {
    Object.values(db.itemsOfUserByUsername).forEach((items) =>
      items.forEach((item) => itemsSet.add(item))
    );

    return Array.from(itemsSet);
  };

  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getItems,
};
