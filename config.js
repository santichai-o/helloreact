const CONFIG = {
  dev: {
    // database
    db: {
        host: 'localhost',
        table: 'test',
        username: 'root',
        password: ''
    },
    // jwt
    jwtTokenSecret: 'MyS1cr3tK3U'
  },
  default: {
    // database
    db: {
        host: 'localhost',
        table: 'test',
        username: 'root',
        password: ''
    },
    // jwt
    jwtTokenSecret: 'MyS1cr3tK3U'
  }
}

const ENV = process.env.NODE_ENV
const config = ENV && CONFIG[ENV] ? CONFIG[ENV] : CONFIG.default

export default config