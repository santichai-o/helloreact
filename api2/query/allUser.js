

import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql/type'

import UserType from '../type/UserType'

export default (users) =>  ({
    description: "Get all user",
    type: new GraphQLList(UserType),
    resolve: function () {
        return users;
    }
})