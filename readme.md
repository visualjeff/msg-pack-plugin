[![Build Status](https://travis-ci.org/visualjeff/msg-pack-plugin.png)](https://travis-ci.org/visualjeff/msg-pack-plugin)
[![bitHound Overall Score](https://www.bithound.io/github/visualjeff/msg-pack-plugin/badges/score.svg)](https://www.bithound.io/github/visualjeff/msg-pack-plugin)
[![bitHound Dependencies](https://www.bithound.io/github/visualjeff/msg-pack-plugin/badges/dependencies.svg)](https://www.bithound.io/github/visualjeff/msg-pack-plugin/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/visualjeff/msg-pack-plugin/badges/devDependencies.svg)](https://www.bithound.io/github/visualjeff/msg-pack-plugin/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/visualjeff/msg-pack-plugin/badges/code.svg)](https://www.bithound.io/github/visualjeff/msg-pack-plugin)

##msg-pack-plugin

* npm install msg-pack-plugin --save

* Plugin registration:

	```js
  server.register([{
    register: require('msg-pack-plugin'),
}], (err) => {
    if (err) {
        throw err;
    }
});
  
   ```

* To validate you could use curl (this assumes you have msgpack2json installed):

```bash
    curl --header "accept: application/x-msgpack" 'http://localhost:3000/api/user' | msgpack2json -d

```
