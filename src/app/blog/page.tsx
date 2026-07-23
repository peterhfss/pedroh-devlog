import { PostCard } from "@/components/post-card";
import { Tab } from "@/components/tab";
import { Post } from "contentlayer/generated";

type BlogProps = {
    posts: Post[];
    
}

export function Blog({posts}: BlogProps){

    const allPosts = posts

    return(
        <Tab title="ls -lt posts/">
            {allPosts.map((post, slug) =>(
              <PostCard key={slug} {...post}/>
            ))}
        </Tab>
    )
}