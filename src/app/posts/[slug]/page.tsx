import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prompt } from "@/components";
import type { Post } from "@/types";
import { posts } from "../../../../.velite";

interface PostProps {
  params: Promise<{ slug: string }> | { slug: string };
  onBack: () => void;
  onOpenPost: (post: Post) => void
}

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post.slug }));

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const { title, description, date, tags } = post;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: date,
      tags: tags,
    },
  };
}

export default async function LayoutPost({ params }: PostProps) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <main>
      <header>
        <Link href='/'>
          <span>←</span> Back to writing
        </Link>
        <Prompt command={`cat posts/${post.slug}.md`}></Prompt>
      </header>
    </main>
  );
}
