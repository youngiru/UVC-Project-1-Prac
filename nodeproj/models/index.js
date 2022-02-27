const { sequelize } = require('./connection');
const Board = require('./board');

const db = {};

db.sequelize = sequelize;
db.Board = Board;

Board.init(sequelize);

module.exports = db;
