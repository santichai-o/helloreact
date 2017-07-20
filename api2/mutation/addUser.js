import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql/type'

import UserType from '../type/UserType'

export default (users) => ({
  type: new GraphQLList(UserType),
  description: 'Add new user',
  args: {
    id: {
      name: 'User ID',
      type: new GraphQLNonNull(GraphQLInt)
    },
    firstname: {
      name: 'Firstname',
      type: new GraphQLNonNull(GraphQLString)
    },
    lastname: {
      name: 'Lastname',
      type: new GraphQLNonNull(GraphQLString)
    },
    age: {
      name: 'Age',
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: function(root, {id, firstname, lastname, age}) {
    users.push({
      id: id,
      firstname: firstname,
      lastname: lastname,
      age: age
    });
    return users;
  }
})
 