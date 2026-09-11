import { Feed } from "feed";
import { getSiteUrl } from "@/lib/utils";
import { posts } from "../../../.velite";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = getSiteUrl();
  const author = {
    name: "Pedro Henrique",
    email: "pedroh.fss@gmail.com",
    link: siteUrl,
  };

  // Posts publicados, do mais recente para o mais antigo
  const items = posts
    .filter((post) => post.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const feed = new Feed({
    title: "Pedro Henrique's Blog",
    description: "My personal blog about my journey as a developer",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: items[0] ? new Date(items[0].date) : new Date(),
    feedLinks: { rss: `${siteUrl}/rss.xml` },
    author,
  });

  for (const category of ["Technology", "Programming", "Development"]) {
    feed.addCategory(category);
  }

  for (const post of items) {
    const url = `${siteUrl}/posts/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description ?? post.title,
      date: new Date(post.date),
      author: [author],
    });
  }

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
