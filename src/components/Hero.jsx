import Image from "next/image";
import curve from "../../public/images/Vector 32.svg";
export default function Hero() {
  return (
    <div className=" min-h-screen pb-3  font-inter flex flex-col justify-center items-center md:flex-row md:justify-between gap-8 md:gap-28 bg-red-600">
      <div className="flex flex-col items-center md:items-start justify-start gap-6 md:w-[555px] text-center md:text-left">
        <h2 className=" text-[#191A15] text-4xl md:text-[60px] font-bold leading-12 md:leading-[80px]">
          Take Control <br /> of Your <br /> Freelance Life
        </h2>
        <Image src={curve} alt="vector" />
        <p className=" text-black font-inter font-medium text-lg leading-7 mt-4">
          Track your gigs, stay on top of deadlines, and never lose sight of
          your payments — all in one place.
        </p>
        <div className="hidden md:flex gap-4">
          <button className="rounded-4xl bg-green text-white px-4 py-1.5 hover:border-2 hover:border-green hover:bg-transparent hover:text-light-text transition-colors duration-300 hover:px-3.5 hover:py-1">
            Get Started
          </button>
          <button className="rounded-4xl border-2 border-green text-light-text px-4 py-1.5 hover:bg-green hover:text-white transition-colors duration-300 cursor-pointer">
            How it works
          </button>
        </div>
      </div>

      <div className="h-[400px] w-[480px] bg-[url('/images/Frame46.png')] bg-contain bg-center bg-no-repeat flex items-center justify-center relative">
        <Image
          src="/images/frame22.png"
          alt="hero-image"
          width={250}
          height={280}
          className="absolute bottom-0 left-21"
        />
        <div className="bg-white rounded-lg flex flex-col items-start gap-0 px-2 py-0 absolute top-4 left-15 shadow-2xl">
          <span className="text-[#A9A7B6] text-sm font-light">
            Total Income
          </span>
          <div className="flex items-center gap-1 ">
            <span className="text-base font-medium">Ksh 24500</span>
            <Image
              src="/images/bar-chart.svg"
              alt="vector"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
