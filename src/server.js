// src/server.js
require('dotenv').config(); // load .env
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'], // agar bisa diakses dari mana saja
      },
    },
  });

  // Sementara, route test agar bisa dicek servernya jalan
  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({
      status: 'success',
      message: 'OpenMusic API v1 ready!',
    }),
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
