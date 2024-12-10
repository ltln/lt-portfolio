'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiExpress, SiGithub, SiNextdotjs, SiShadcnui, SiTailwindcss } from "@icons-pack/react-simple-icons";
import ThemeToggle from "../ThemeToggle";

import LT_Vest from "@/assets/imgs/lt-vest.jpg";
import Hat from "@/assets/imgs/christmas-hat.png";

const routes = [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "About",
        route: "/about"
    },
    {
        title: "Projects",
        route: "/projects"
    },
    {
        title: "Posts",
        route: "/posts"
    },
    {
        title: "Contact",
        route: "/contact"
    },
]

export default function SidebarBody() {
    const pathname = "/" + (usePathname()).split("/")[1];
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="relative">
                    <Image src={LT_Vest} alt="lt-vest" className="rounded-full" width={150} />
                    <Image src={Hat} alt='hat' className="absolute -top-20 -right-10" />
                </div>
                <h1 className="text-2xl font-bold text-center mt-4">Louis Nguyen</h1>
                <p className="text-center text-zinc-500">Univesity Student based in Vietnam</p>
            </div>
            <div className="flex flex-col items-center mt-12 gap-4">
            {routes.map((route, index) => (
                <Link href={route.route} key={index} className={cn('h-6', route.route === pathname ? "text-blue-500 border-b-2 border-b-blue-500" : "hover-underline-animation hover:text-blue-500 duration-300")}>{route.title}</Link>
            ))}
            </div>
            <div className="mt-12 text-gray-500">
                <p className="text-xs">© Copyright 2024. All rights reserved.</p>
                <p className="text-xs flex gap-1 items-center mt-4">
                    Built using
                    <Link href="https://nextjs.org" target="_blank">
                        <SiNextdotjs className="h-4 hover:text-black dark:hover:text-white duration-300" />
                    </Link>
                    <Link href="https://expressjs.com" target="_blank">
                        <SiExpress className="h-4 hover:text-black dark:hover:text-white duration-300" />
                    </Link>                
                    <Link href="https://tailwindcss.com/" target="_blank">
                        <SiTailwindcss className="h-4 hover:text-[#06B6D4] duration-300" />
                    </Link>
                    <Link href="https://ui.shadcn.com/" target="_blank">
                        <SiShadcnui className="h-4 hover:text-black dark:hover:text-white duration-300" />
                    </Link>                
                </p>
                <Link href="https://github.com/ltln/lt-portfolio" target="_blank" className="duration-300 text-xs hover:text-[#181717] dark:hover:text-white flex items-center mt-1">
                    Source code
                    <SiGithub className="h-4" />                
                </Link>
            </div>
            <div className="mt-12 text-center">
                <ThemeToggle />
            </div>
        </>
    )
}