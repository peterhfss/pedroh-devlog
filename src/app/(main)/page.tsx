

import { PostCard } from "@/components/post-card";
import { Tab } from "@/components/tab";
import { posts } from '../../../.velite';

export default function Home(){

    const allPosts = posts

    return(
        <Tab title="ls -lt posts/">
            {
                allPosts.map((post) => (
                < PostCard key={post.slug} {...post} />
            ))}
        </Tab>
    )
}