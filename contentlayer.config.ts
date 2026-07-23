import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypeShiki from '@shikijs/rehype'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },


  },
  computedFields: {
    url: {
      type: 'string', resolve: (post) => `/blog/posts/${post._raw.flattenedPath}`
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    }
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          // Altere 'one-dark-pro' para 'dracula'
          theme: 'one-dark-pro',
        },
      ],
    ],

  },
})