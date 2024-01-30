module.exports = (sequelize, Sequelize) => {
    const comment = sequelize.define("comments", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        blogId: {
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER
        },
        comment: {
            type: Sequelize.STRING
        },
    });

    return comment;
};
