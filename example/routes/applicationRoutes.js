'use strict';

const routes = {
    register: (server, options, next) => {

        server.route({
            method: 'GET',
            path: '/api/user',
            handler: (request, reply) => {

                reply({
                    statusCode: 200,
                    message: 'Getting All User Data',
                    data: [{
                        name: 'Kashish',
                        age: 24
                    }, {
                        name: 'Shubham',
                        age: 21
                    }, {
                        name: 'Jasmine',
                        age: 24
                    }]
                });
            }
        });
        next();
    }
};

routes.register.attributes = {
    name: 'applicationRoutes',
    version: '1.0.0'
};

module.exports = routes;
