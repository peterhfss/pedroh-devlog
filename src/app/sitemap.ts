import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";
import { posts } from "../../.velite";

export default function sitemap(): MetadataRoute.Sitemap{

    const postsSet: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${getSiteUrl()}/posts/${post.slug}`,
        lastModified: post.date,
        changeFrequency: 'weekly',
        priority: 0.8
    }))

    return [
        {
            url: `${getSiteUrl()}`,
            lastModified:new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: `${getSiteUrl()}/about`,
            lastModified:new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${getSiteUrl()}/projects`,
            lastModified:new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        ...postsSet
    ]
}