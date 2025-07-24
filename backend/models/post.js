module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Posts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: true,
            paranoid: true
        });
    return Post;
}
