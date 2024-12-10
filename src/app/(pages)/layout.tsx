'use client';

import { NavigationSidebar } from "@/components/NavigationSidebar";
import Image from "next/image";

import Background from "@/assets/imgs/winter-background.jpg";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="h-screen w-full absolute">
      <Image
        alt="Background"
        src={Background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      />
    </div>
    <div className="w-full max-w-[1200px] min-h-[767px] h-screen m-auto">
      <div className="min-[1000px]:grid grid-cols-4 h-full" style={{ boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.6)' }}>
        <NavigationSidebar />
        <div className="col-span-3 max-[999px]:col-span-full max-[999px]:h-full bg-zinc-200 dark:bg-zinc-800 max-[999px]:pt-16">
          {children}
        </div>
      </div>    
    </div>
    </>
  );
}