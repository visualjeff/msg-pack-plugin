[![Build Status](https://travis-ci.org/visualjeff/msg-pack-plugin.png)](https://travis-ci.org/visualjeff/msg-pack-plugin)

## msg-pack-plugin for Hapi

* npm install msg-pack-plugin --save

* Plugin registration:

    ```js
        server.register([{
            register: require('msg-pack-plugin')
        }], (err) => {
            if (err) {
                throw err;
            }
        });
    ```

* To validate you could use curl (this assumes you have [msgpack2json](https://github.com/ludocode/msgpack-tools) installed):

    ```bash
        curl --header "accept: application/x-msgpack" 'http://localhost:3000/api/user' | msgpack2json -d
    ```

