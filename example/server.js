'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register([ { plugin: require('../'), server: server }, require('./routes/applicationRoutes') ]);

    await server.start();
    
    console.dir('Server running at: ' + server.info.uri, {
        colors: true
    });
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
