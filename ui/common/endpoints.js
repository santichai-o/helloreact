import config from '../../config.js'

export const API_ROOT = (config.host && config.port) ? `http://${config.host}:${config.port}/api/v1` : `/api/v1`