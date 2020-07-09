module.exports = app => {
    const DataTypes = app.Sequelize;
    const Fans = app.model.define('Fans', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        member_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        cmember_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
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
        freezeTableName: true,
        tableName: 'fans'
    });
    Fans.associate = function (){
        // 与member存在一对一关系，所以使用belongsTo()
        app.model.Fans.belongsTo(app.model.Member, {
            foreignKey: 'cmember_id',
            targetKey: 'id'
        });
    }

    

    return Fans;
};