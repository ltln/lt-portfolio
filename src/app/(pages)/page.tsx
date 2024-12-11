import Image from "next/image";
import LTSayHi from "@/assets/imgs/lt.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-8 flex relative min-h-[700px] h-screen">
      <Image src={LTSayHi} alt="" height={500} className="absolute bottom-0 right-8 max-md:hidden" style={{ filter: 'brightness(1.2) drop-shadow(0 0 8px rgb(59 130 246)' }} />
      <div className="mt-52 font-noto max-w-[480px]">
        <p className="text-2xl">Hello there,</p>
        <p className="text-5xl font-bold">I&#39;m Tỷ</p>
        <p className="text-lg">aka Louis, LT, Lờ Tê, Lộc Tỷ Tỷ.</p>
        <p className="text-xl mt-5">Welcome to my portfolio!</p>
        <p className="mt-8">I am a 19-year-old student at the University of Information Technology in Ho Chi Minh City, majoring in Information Security.</p>
        <div className="mt-8 flex items-center gap-4">
          <Link href="/about">
            <Button>About</Button>
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
