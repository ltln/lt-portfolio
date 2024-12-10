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
    <div className="h-screen w-full -z-10 fixed max-[1023px]:bg-zinc-300 max-[1023px]:dark:bg-zinc-700">
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
        className="max-[1023px]:hidden"
      />
    </div>
    <div className="w-full max-w-[1200px] min-h-screen m-auto">
      <div className="min-[1024px]:grid grid-cols-4 min-h-screen" style={{ boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.6)' }}>
        <NavigationSidebar />
        <div className="col-span-3 max-[1023px]:col-span-full bg-zinc-200 dark:bg-zinc-800 max-[1023px]:min-h-screen">
          {children}
        </div>
      </div>    
    </div>
    </>
  );
}