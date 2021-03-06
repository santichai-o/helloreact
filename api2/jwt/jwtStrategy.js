import { Strategy, ExtractJwt } from 'passport-jwt'

import config from '../../config.js'
import models from '../models'

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
opts.secretOrKey = config.jwtTokenSecret

export default new Strategy(opts, (payload, done) => {
    models.User.findById(payload.id).then( (resutl) => {
        if (!resutl) 
            return done(null, false, 'user not found')

        const { id, name, username, email, bio } = resutl.dataValues
        const user = { id, name, username, email, bio }
        return done(null, user)
    })
})