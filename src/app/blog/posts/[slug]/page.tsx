
import { CodeBlock } from "@/components/mdx/code-block";
import { MarkdownAlert } from "@/components/mdx/markdown-alert";
import { formatDate } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostProps {
  params: Promise<{ slug: string }> | { slug: string }
}

const mdxComponents = { MarkdownAlert, CodeBlock }

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export default async function LayoutPost({ params }: PostProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) notFound()

  const MDXContent = getMDXComponent(post.body.code)

  return (
    <main className="min-h-screen max-w-2xl flex flex-col mx-auto px-4 py-12">
      <Link
        className="font-mono text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 mb-10 transition-colors cursor-pointer"
        href='/'
      >
        <span className="text-primary">←</span> cd ..
      </Link>
      <h1 className="text-3xl tracking-tighter font-semibold mb-2">
        {post.title}
      </h1>
      <div className="flex justify-between w-full items-center mb-8">
        <p className="text-[11px]">
          {formatDate(post.publishedAt)}
        </p>
        <span className="flex gap-1.5">
          {post.tags?.map((tag) => (
            <span key={tag} className="border border-border p-1 rounded-lg text-[11px]">{tag}</span>
          ))}
        </span>
      </div>

      <article className="prose prose-invert">
        <MDXContent components={mdxComponents} />
      </article>

    </main>
  )
}

