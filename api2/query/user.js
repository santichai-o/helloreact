import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql/type'

import UserType from '../type/UserType'

const user = {
    "id": 1,
    "firstname": "first name 01",
    "lastname": "last name 01",
    "age": 10
}

export default {
    description: "Get user",
    type: UserType,
    args: {
        id: {
            name: 'User ID',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: function (root, { id }) {
        return user;
    }
}