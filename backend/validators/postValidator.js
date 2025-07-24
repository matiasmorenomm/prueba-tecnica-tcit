const { body, param } = require('express-validator');

const validatePost = [
    body('name')
        .notEmpty()
        .withMessage('name is required'),
    body('description')
        .notEmpty()
        .withMessage('description is required'),
];

const validatePostIdParam = [
    param('id')
        .isInt({ gt: 0 })
        .withMessage('El ID debe ser un número entero positivo'),
];

module.exports = {
    validatePost,
    validatePostIdParam,
};
