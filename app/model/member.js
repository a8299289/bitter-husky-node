module.exports = app => {
    const DataTypes = app.Sequelize;
    const Member = app.model.define('Member', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        nick_name: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        fans_num: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: true,
            defaultValue: '0'
        },
        follow_num: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: true,
            defaultValue: '0'
        },
        praise_num: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: true,
            defaultValue: '0'
        },
        collection_num: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: true,
            defaultValue: '0'
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: app.Sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        
    });

    
    return Member;
};