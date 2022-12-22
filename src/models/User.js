const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });

  return User;
};

module.exports = UserModel