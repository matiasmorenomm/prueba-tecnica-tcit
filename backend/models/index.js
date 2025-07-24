const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PostModel = require('./post');

const Post = PostModel(sequelize, DataTypes);

module.exports = {
    sequelize,
    Post,
};