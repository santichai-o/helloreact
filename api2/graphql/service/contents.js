import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql/type'

import models from '../../models'
import ContentType from '../type/ContentType'

export const getContents = {
    description: "Get all contents",
    type: new GraphQLList(ContentType),
    resolve: () => {
        return models.Content.findAll()
    }
}

export const getContent = {
    description: "Get content",
    type: ContentType,
    args: {
        id: {
            name: 'ID',
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: (root, { id }) => {
        return models.Content.findById(id)
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
        return models.Content.create({
            title,
            description
        })
    }
}