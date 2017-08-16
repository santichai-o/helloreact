import jwt from 'jwt-simple'

import config from '../../config.js'
import models from '../models'

export const getIndex = (req, res) => {
  res.render('index', {locals: { path: req.path }})
}

export const getLogin = (req, res) => {
  res.render('login', {locals: { path: req.path }})
}

export const portLogin = (req, res) =>{
  if(!req.body.username || !req.body.password)
    res.status(401).json({ error: true, message:"no such user found" })

  let username = req.body.username;
  let password = req.body.password;

  models.User.find({ 
    where: { 
      username: username, 
      password: password 
    }
  }).then( (result) => {
    if (!result) {
      res.status(401).json({ error: true, message:"no such user found" })
    } else {
      let user = result.dataValues
      let payload = {id: user.id, meta: 'hello'}
      let token = jwt.encode(payload, config.jwtTokenSecret);

      res.json({ token: token });
    }
  }).error((err) => {
    res.status(401).json({ error: true, message:"no such user found" })
  })
}