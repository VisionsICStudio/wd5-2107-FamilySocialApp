/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.hasMany(models.User, {
        foreignKey: 'user_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
      models.User.sync()

      Tag.hasMany(models.Post, {
        foreignKey: 'post_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
      models.Post.sync()

      Tag.belongsToMany(models.User, {
        foreignKey: 'user_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        through: 'tags_received',
      })
      models.User.sync()

      Tag.belongsToMany(models.Post, {
        foreignKey: 'post_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        through: 'tags_received',
      })
      models.Post.sync()
    }
  }
  Tag.init(
    {
      count: {
        allowNull: false,
        field: 'count',
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        validate: {
          notEmpty: true,
        },
      },
      icon: {
        allowNull: false,
        field: 'icon',
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        allowNull: false,
        field: 'name',
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [1, 50],
          notEmpty: true,
        },
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.UUID,
        unique: true,
      },
    },
    {
      modelName: 'Tag',
      options: {
        timestamps: false,
      },
      sequelize,
      tableName: 'tags',
    }
  )
  return Tag
}
