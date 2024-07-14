/* eslint-disable prettier/prettier */
// C:\project2.0\MyccAngel\mycc-angel-server\src\ormconfig.ts

export default {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Adjust this path based on your entity file location
  synchronize: true,
};

