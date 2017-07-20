import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql/type'

import Db from '../db.js'
import ContentType from '../type/ContentType'

export const getContents = {
    description: "Get all contents",
    type: new GraphQLList(ContentType),
    resolve: () => {
        return Db.models.contents.findAll()
    }
}

export const addContent = {
    type: ContentType,
    description: 'Add new content',
    args: {
        title: {
            name: 'Title',
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            name: 'Description',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, { title, description }) => {
        return Db.models.contents.create({
            title,
            description
        })
    }
}