import markdownToHtml from "@/lib/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);

    if (post.content == "") {
        return "";
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

type Params = {
    params: {
      slug: string;
    };
};
  
export function generateMetadata({ params }: Params): Metadata {
    const post = getPostBySlug(params.slug);
  
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