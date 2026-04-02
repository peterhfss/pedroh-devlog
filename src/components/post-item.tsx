import Link from "next/link";
import { Post } from "contentlayer/generated";

type PostItemProps = Post

export default function PostItem( {post} : {post:PostItemProps}){

    const {title, date, views, slug} = post
    return(
        <li className="opacity-[1]">
            <Link href={slug}>
                <span className="flex last:border-b-0 hover:bg-[#242424] border-y border-[#313131]">
                    <span className="py-3 flex grow items-center">
                        <span className="inline-block w-14 self-start shrink-0 text-neutral-400">
                            {new Date(date).getFullYear()}
                        </span>
                        <span className="text-neutral-100 mr-6 grow">
                            {title}
                        </span>
                        <span className="text-neutral-400 text-xs mr-1 tabular-nums">
                            {views}
                        </span>
                    </span>
                </span>
            </Link>
        </li>
    )
}