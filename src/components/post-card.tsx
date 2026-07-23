'use client'

import Link from "next/link";

type PostCardProps = {
    slug: string; 
    title: string;
    publishedAt: string;  
    tags: string[];
}

export function PostCard({slug, title, publishedAt, tags}:PostCardProps){
    return(
        <Link href={`/blog/posts/${slug}`} className="w-full">
            <article className="group py-5 border-t border-border cursor-pointer transition-all duration-200 font-geist-mono hover:bg-[rgba(255,255,255,0.025)]">
                <div className="flex justify-between w-full px-2 gap-10 items-center">
                    <span className="text-xs text-muted-foreground">
                        {`'${new Date(publishedAt).getFullYear().toString().slice(2,4)}`}
                    </span>
                    <h2 className=" text-base tracking-tight transition-colors text-left duration-200 font-mono flex-3 ">
                        {title}
                    </h2>
                    <span className="flex gap-2 text-[11px]">
                        {tags.map((stack) =>(
                            <span key={stack} className="border border-border p-2 rounded-lg">{stack}</span>
                        ))}
                    </span>
                </div>
            </article>
        </Link>
    )
}