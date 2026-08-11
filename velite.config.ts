import rehypeShiki from '@shikijs/rehype';
import remarkGfm from 'remark-gfm';
import { defineCollection, defineConfig, s } from 'velite';

const computedFields = <T extends { slug: string}>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1). join("/"),
})

const posts  = defineCollection({
    name: "Post",
    pattern: `**/*.mdx`,
    schema: s.object({
        slug: s.path(),
        title: s.string().max(99),
        tags: s.array(s.string()),
        description: s.string().max(999).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx()
    })
    .transform(computedFields)
})

export default defineConfig({
    root: 'content',
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [
            [
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                rehypeShiki as any, 
                { theme: 'github-dark', }
            ]
        ],
        remarkPlugins: [remarkGfm],
    }
})