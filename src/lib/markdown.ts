import { unified } from 'unified';
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlugCustomId from "rehype-slug-custom-id";
import rehypeStarryNight from 'rehype-starry-night';
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeSlugCustomId, { enableCustomId: true })
    .use(rehypeSanitize, { clobberPrefix: "" })
    .use(rehypeStarryNight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}