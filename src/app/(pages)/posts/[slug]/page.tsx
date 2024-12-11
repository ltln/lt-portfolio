import markdownToHtml from "@/lib/markdown";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format, formatDistance, subDays } from "date-fns";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { timeParse } from "@/lib/utils";
import MarkdownRender from "@/components/MarkdownRender";
import { headers } from "next/headers";
import BackToTopButton from "@/components/BackToTopButton";


export default async function Post({ params }: Params) {
    const host = (await headers()).get('host');
    const post = getPostBySlug((await params).slug);

    if (post.content == "") {
        return "";
    }

    const content = await markdownToHtml(post.content || "");
    const time = timeParse(post.date);

    return (
        <div className="w-full h-full">
            <div style={{ background: 'linear-gradient(0deg, rgba(0,0,1,0.7), rgba(255,255,255,0) 60%), url("' + post.coverImage + '") center / cover no-repeat' }} className="w-full h-48 min-[1024px]:h-64 flex justify-end flex-col px-8 py-4">
                <p className="text-4xl max-lg:text-3xl text-white font-bold">{post.title}</p>
                <div className="text-sm text-zinc-400">
                    <span>{post.author}</span>
                    <span> • </span>
                    <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger>
                            {formatDistance(subDays(time, 1), new Date(), { addSuffix: true })}
                        </TooltipTrigger>
                        <TooltipContent>
                            <span className="text-zinc-200 font-semibold">
                                {format(time, "PPP")}
                            </span>
                            <span>{' '}</span>
                            <span className="text-zinc-400">
                                {format(time, "pppp")}
                            </span>                    
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </div>
            </div>
            <div className="prose dark:prose-invert prose-headings:font-semibold prose-li:my-0 prose-ul:my-0 prose-a:text-blue-500 hover:prose-a:text-blue-500/80 prose-hr:my-6 prose-hr:border-b-4 prose-hr:border-b-zinc-400 dark:prose-hr:border-b-zinc-600 prose-h1:py-4 prose-h1:border-b-[1px] prose-h1:border-b-zinc-600 prose-h2:py-2 prose-h2:border-b-[1px] prose-h2:border-b-zinc-600 prose-blockquote:border-s-zinc-400 dark:prose-blockquote:border-s-zinc-600 prose-pre:bg-zinc-300 prose-pre:text-zinc-700 dark:prose-pre:bg-zinc-900/80 dark:prose-pre:text-zinc-200 px-8 py-8 min-w-full font-sans">
                <MarkdownRender content={content} host={host} />
            </div>
            <div className="sticky bottom-8 px-8 flex justify-end">
                <BackToTopButton />
            </div>
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