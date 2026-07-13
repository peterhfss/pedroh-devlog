
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { notFound } from "next/navigation";

interface PostProps {
  params: Promise<{ slug: string}> |  { slug : string}
}

const CustomButton = () =>(
  <button className="p-6 bg-primary text-black">
    Clique aqui!
  </button>
)

const mdxComponents = {
  Button: CustomButton,
}

export const generateStaticParams = async () => allPosts.map((post) => ({slug: post._raw.flattenedPath}))

export default async function LayoutPost({params}:PostProps){
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) notFound()

    const MDXContent = getMDXComponent(post.body.code)

    return (
      <article className="min-h-screen max-w-2xl flex flex-col mx-auto px-4 py-12">
        <h1>{post.title}</h1>
        <p>{new Date(post.date).toLocaleDateString('en-US')}</p>
        <MDXContent components={mdxComponents}/>
      </article>
    )
}

