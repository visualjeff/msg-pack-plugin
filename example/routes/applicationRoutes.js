/*eslint no-unused-vars: ["error", { "args": "none" }]*/
'use strict';

const routes = {
    name: 'applicationRoutes',
    register: (server, options) => {

        server.route({
            method: 'GET',
            path: '/api/user',
            handler: (request, h) => {

                return {
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
                }
            }
        });
    }
};

module.exports = routes;
