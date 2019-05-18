'use strict';

const msgpack = require('msgpack-lite');

exports.plugin = {
    pkg: require('../package.json'),
    register: (server) => {

        server.ext('onPreResponse', (request, h) => {
            const acceptType = request.raw.req.headers.accept;
            const shouldMsgPack = (typeof acceptType !== 'undefined') && (acceptType === 'application/x-msgpack');
            if (shouldMsgPack) {
		const encodedReponseSource = msgpack.encode(request.response.source);    
		return h.response(encodedReponseSource).encoding('hex').code(200).type('application/x-msgpack').bytes(encodedReponseSource.length);
            }
            return h.continue;
        });
    }
};

