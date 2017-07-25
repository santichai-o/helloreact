import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql/type'

import { getContent, getContents, addContent } from './service/contents'

let queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    contents: getContents,
    content: getContent
  }
})

let mutationType = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addContent: addContent
  }
}) 

let schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
})

export default schema