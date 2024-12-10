import Image from "next/image";
import LTSayHi from "@/assets/imgs/lt.webp";

export default function Home() {
  return (
    <div className="w-full px-8 flex relative h-full">
      <Image src={LTSayHi} alt="" height={500} className="absolute bottom-0 right-8 max-md:hidden" style={{ filter: 'brightness(1.2) drop-shadow(0 0 8px rgb(59 130 246)' }} />
      <div className="mt-52 font-noto max-w-[480px]">
        <p className="text-2xl">Hello there,</p>
        <p className="text-5xl font-bold">I&#39;m Louis</p>
        <p className="text-xl">Welcome to my portfolio!</p>
        <p className="mt-8">I am a 19-year-old student at the University of Information Technology in Ho Chi Minh City, majoring in Information Security.</p>
      </div>
    </div>
  );
}
