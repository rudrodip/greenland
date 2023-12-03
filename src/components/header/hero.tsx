import { Icons } from "../icons";
import Link from "next/link";
import EarthCanvas from "../threed-scenes/Earth";

export default function Hero() {
  return (
    <section id="hero" className="max-x-7xl my-5 mx-2 lg:mx-0">
      <div className="flex flex-col items-center justify-center">
        <div className="px-3 py-2 border border-primary/30 rounded-full hover:scale-105 transition-transform duration-75 shine shine-hover backdrop-blur-sm">
          <div className="flex justify-center gap-3 items-center">
            <Icons.logo width={25} height={25} />
            <Link href="/#support" className="primary-gradient">
              Support us build the future
            </Link>
          </div>
        </div>
      </div>
      <BigLogo />
      <h1 className="text-center lg:block font-heading tracking-wider leading-relaxed text-4xl lg:text-5xl">
        Nurturing Knowledge, Growing Change
      </h1>
      <div className="relative">
        <div className="absolute top-0 left-0 container mx-auto -translate-y-[50%]"></div>
      </div>
      <div
        id="video"
        className="relative my-6 lg:my-12 flex-col justify-center items-center p-5 h-[300px] lg:h-[700px] translate-y-5 lg:translate-y-20"
      >
        <div className="absolute lg:top-[-35%] top-[-25%] inset-0 h-[200px] lg:h-[550px] z-[-5]">
          <EarthCanvas />
        </div>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/fOtChVfzpCI"
          title="#LIVE COP28 Reaching the Last Mile - Pledging Session"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
}

const BigLogo = () => {
  return (
    <section id="big-logo" className="flex justify-center items-center">
      <h1 className="primary-gradient font-heading tracking-wider leading-relaxed text-6xl lg:text-8xl text-justify primary-gradient">
        GreenLander
      </h1>
    </section>
  );
};
