'use client'

import Link from "next/link";

type PostCardProps = {
    slug: string; 
    title: string;
    date: string;
    
}

export function PostCard({slug, title, date}:PostCardProps){
    return(
        <Link href={`/blog/posts/${slug}`} className="w-full">
            <article className="">
                <div className="group flex items-center gap-6 py-5 border-b border-border cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.025)]">
                    <h2 className="flex-1 text-neutral-400 text-base tracking-tight transition-colors duration-200 font-mono">
                        {title}
                    </h2>
                    <span>{date}</span>
                </div>
            </article>
        </Link>
    )
}