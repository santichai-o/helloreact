import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql/type'

import UserType from './type/UserType.js'
import { getContent, getContents, addContent } from './service/contents'

const hello = {
  type: GraphQLString, 
  resolve: () => {
      return 'Hello World.'
  }
}

const me = {
  type: UserType,
  resolve: (parent, args, context) => {
    if (context.user)
      return context.user
    else
      throw new Error('User not login.')
  }
}

let queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: hello,
    me: me,
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