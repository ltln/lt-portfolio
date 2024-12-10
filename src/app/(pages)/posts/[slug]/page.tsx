import markdownToHtml from "@/lib/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export default async function Post({ params }: Params) {
    const post = getPostBySlug((await params).slug);

    if (post.content == "") {
        return "";
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <div className="w-full h-full">
            <div style={{ background: 'linear-gradient(0deg, rgba(0,0,1,0.7), rgba(255,255,255,0) 60%), url("' + post.coverImage + '") center / cover no-repeat' }} className="w-full h-48 min-[1024px]:h-64 flex justify-end flex-col px-8 py-4">
                <p className="text-4xl text-white font-bold">{post.title}</p>
                <p className="text-sm text-zinc-400">{post.author} • {post.date}</p>
            </div>
            <div className="prose dark:prose-invert px-8 py-8 min-w-full" dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}

type Params = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const post = getPostBySlug((await params).slug);

    if (post.content == "") {
        return notFound();
    }

    const title = `${post.title}`;

    return {
        title,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
  
    return posts.data.map((post) => ({
      slug: post.slug,
    }));
}