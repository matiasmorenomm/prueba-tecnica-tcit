const { body, param } = require('express-validator');

const validatePost = [
    body('name')
        .notEmpty()
        .withMessage('El nombre es requerido'),
    body('description')
        .notEmpty()
        .withMessage('la descripcion es requerida'),
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
