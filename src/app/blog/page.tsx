import HomeLink from "@/components/home-link";
import PostItem from "@/components/post-item";
import { allPosts } from "contentlayer/generated";

export default function Blog(){

    const posts = allPosts
    console.log(posts)
    
    return(
        <section className="w-7xl h-256 m-auto flex justify-center">
            <main className="w-[576px] h-[800px] flex flex-col gap-12 text-sm font-roboto-mono">
                <header className="flex justify-between w-full h-8 items-center">
                    <h2 className=" font-medium text-neutral-600 text-2xl">
                        //blog
                    </h2>
                    <HomeLink />
                </header>
                <div className="w-full flex flex-col gap-4">
                    <div className="opacity-[1] transform-none">
                        <header className="text-neutral-600 flex items-center text-xs">
                            <button className="cursor-pointer w-12 h-9 text-left">
                                date
                            </button>
                            <span className="grow pl-2">
                                title
                            </span>
                            <button className="cursor-pointer h-9 pl-4">
                                views
                            </button>
                        </header>
                    </div>
                    <ul>
                        {posts.map((post) =>(
                            <PostItem post={post} key={post._id}/>
                        ))}
                    </ul>
                </div>
            </main>
        </section>
    )
}