const CONFIG = {
  dev: {
    // database
    host: '127.0.0.1',
    port: '8080',
    db: {
        host: 'localhost',
        database: 'test',
        username: 'root',
        password: ''
    },
    // jwt
    jwtTokenSecret: 'MyS1cr3tK3U'
  },
  production: {
    // database
    host: '127.0.0.1',
    port: '8080',
    db: {
        host: 'localhost',
        database: 'test',
        username: 'root',
        password: ''
    },
    // jwt
    jwtTokenSecret: 'MyS1cr3tK3U'
  },
  default: {
    // database
    /* db: {
        host: 'localhost',
        database: 'test',
        username: 'root',
        password: ''
    }, */
    // jwt
    jwtTokenSecret: 'MyS1cr3tK3U'
  }
}

const ENV = process.env.NODE_ENV
const config = ENV && CONFIG[ENV] ? CONFIG[ENV] : CONFIG.default

export default config