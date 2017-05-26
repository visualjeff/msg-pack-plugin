'use strict';

const msgpack = require('msgpack-lite');

const msgPackPlugin = {
    register: (server, options, next) => {

        server.ext('onPreResponse', (request, reply) => {
            const req = request.raw.req;
            const acceptType = req.headers.accept;
            const shouldMsgPack = (typeof acceptType !== 'undefined') && (acceptType === 'application/x-msgpack');
            if (shouldMsgPack) {
		const encodedReponseSource = msgpack.encode(request.response.source);    
		//const myReply = reply(encodedReponseSource).encoding('binary').header('Content-Type', 'application/x-msgpack').header('Content-Length', encodedReponseSource.length);
		const myReply = reply(encodedReponseSource).encoding('hex').code(200).type('application/x-msgpack').bytes(encodedReponseSource.length);
                //console.log(msgpack.decode(myReply.source)); 
		return myReply;
            }
            return reply.continue();
        });

        next();
    }
};

msgPackPlugin.register.attributes = {
    pkg: require('../package.json')
};

module.exports = msgPackPlugin;