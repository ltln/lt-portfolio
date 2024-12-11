import Link from "next/link";
import parse, { domToReact } from 'html-react-parser';

export default function MarkdownRender({ content, host }: { content: string, host: string | null }) {
    const options = {
        replace(domNode: any) {
            if (domNode.type === 'tag' && domNode.name === 'a' && domNode.attribs && domNode.attribs.href) {
                const { href, ...otherAttributes } = domNode.attribs;
                if (href.startsWith('/') || href.startsWith(host) || href.startsWith("http://" + host) || href.startsWith("https://" + host))
                    return (
                        <Link href={href} {...(otherAttributes as React.HTMLAttributes<HTMLAnchorElement>)}>
                            {domToReact(domNode.children, options)}
                        </Link>
                    );
                return (
                    <a href={href} {...(otherAttributes as React.HTMLAttributes<HTMLAnchorElement>)} target={href.startsWith('#') ? '_self' : '_blank'}>
                        {domToReact(domNode.children, options)}
                    </a>
                )
            }
        },
    }

    return parse(content, options);
}