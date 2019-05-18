/*eslint no-unused-vars: ["error", { "args": "none" }]*/
'use strict';

const MsgPackPlugin = require('../');

const Hapi = require('@hapi/hapi');
const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const lab = exports.lab = Lab.script();

const describe = lab.experiment;
const expect = Code.expect;
const it = lab.test;

const msgpack = require('msgpack-lite');

describe('msgpack-plugin', () => {

    it('loads as a plugin', () => {

        const server = new Hapi.Server();
        const register = async (server) => {

            await server.register([{
                plugin: MsgPackPlugin,
                options: {}
            }]);
        };

        register(server).catch((err) => {

            expect(err).to.not.exist();
        });
    });


    it('user request without proper accept header', (/* done */) => {

        const server = new Hapi.Server();
        const register = async (server) => {

            await server.register([{
                plugin: MsgPackPlugin
            }]);
        };

        register(server).catch((err) => {

            expect(err).to.not.exist();
        });

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
                };
            }
        });
        const options = {
            method: 'GET',
            url: '/api/user',
            headers: {}
        };

        server.inject(options, (res) => {

            expect(res.result).to.exist();
            expect(res.result.statusCode).to.equal(200);
            expect(res.result.message).to.equal('Getting All User Data');
            expect(res.result.data).to.equal([{
                name: 'Kashish',
                age: 24
            }, {
                name: 'Shubham',
                age: 21
            }, {
                name: 'Jasmine',
                age: 24
            }]);
            //done();
        });
    });
    
    it('user request with proper accept header', (/* done */) => {

        const server = new Hapi.Server();
        const register = async () => {

            await server.register([{
                plugin: MsgPackPlugin
            }]);
        };

        register().catch((err) => {

            expect(err).to.not.exist();
        });

        server.route({
            method: 'GET',
            path: '/api/user',
            handler: (request, h) => {

                return { statusCode: 200, message: 'Getting All User Data', data: [{ name: 'Kashish', age: 24 }, { name: 'Shubham', age: 21 }, { name: 'Jasmine', age: 24 }] };
	    }
	}
	);

        const options = {
            method: 'GET',
            url: '/api/user',
            headers: {
                accept: 'application/x-msgpack',
            }
        };

        server.inject(options, (res) => {

            expect(res.result).to.exist();
	    expect(res.statusCode).to.equal(200);
	    expect(res.headers['content-type']).to.equal('application/x-msgpack');
	    expect(JSON.stringify(msgpack.decode(res.rawPayload))).to.equal('{"statusCode":200,"message":"Getting All User Data","data":[{"name":"Kashish","age":24},{"name":"Shubham","age":21},{"name":"Jasmine","age":24}]}');
            //done();
        });
    });
});
