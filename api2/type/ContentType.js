import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql/type'

export default new GraphQLObjectType({
  name: 'content',
  fields: function () {
    return {
      id: {
        type: GraphQLInt
      },
      title: {
        type: GraphQLString
      }/* ,
      description: {
        type: GraphQLString
      } */
    }
  }
})