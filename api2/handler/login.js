import jwt from 'jwt-simple'

import config from '../../config.js'
import Db from '../db/db.js'

export const getIndex = (req, res) => {
  res.render('index', {locals: { path: req.path }})
}

export const getLogin = (req, res) => {
  res.render('login', {locals: { path: req.path }})
}

export const portLogin = (req, res) =>{
  if(!req.body.username || !req.body.password)
    res.status(401).json({message:"no such user found"})

  let username = req.body.username;
  let password = req.body.password;

  Db.models.users.find({ 
    where: { 
      username: username, 
      password: password 
    }
  }).then( (result) => {
    let user = result.dataValues
    let payload = {id: user.id, meta: 'hello'}
    let token = jwt.encode(payload, config.jwtTokenSecret);

    res.json({message: true, token: token });
  }).error((err) => {
    res.status(500).json({ message: err.message })
  })
}