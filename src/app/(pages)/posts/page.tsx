import { Post } from "@/lib/interfaces";
import { getAllPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PostList() {
    const allPosts = getAllPosts();

    return (
        <div className="p-8">
            <div className="mb-8">
                <p className="text-4xl font-bold text-zinc-600 dark:text-zinc-300">Posts</p>
                <p className="text-zinc-600 dark:text-zinc-300">Here I&#39;ll share some stuff</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
            {allPosts.data.map((post: Post, index: number) => (
                <Link href={"/posts/" + post.slug} className={cn(index == 0 ? "col-span-full" : "col-span-1", "max-lg:col-span-full")} key={index}>
                    <div style={{ background: 'linear-gradient(0deg, rgba(0,0,1,0.7), rgba(255,255,255,0) 60%), url("' + post.coverImage + '") center / cover no-repeat' }} className="w-full h-48 flex justify-end flex-col px-8 py-4 rounded-lg">
                        <p className="text-3xl text-white font-bold">{post.title}</p>
                        <p className="text-sm text-zinc-300">{post.author} • {post.date}</p>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}