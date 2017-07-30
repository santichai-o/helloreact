import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql/type'

export default new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: GraphQLInt
      },
      name: {
        type: GraphQLString
      },
      username: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      bio: {
        type: GraphQLString
      } 
    }
  }
})