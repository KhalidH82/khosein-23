import { slabo, khula, montserrat } from "../app/fonts";

const Hero = () => {
  return (
    <section className="hero h-full w-full">
      <div className="container px-4 mx-auto">
        <div className="h-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-center">
          <div className="h-full w-full lg:w-1/2">
            <img src="/images/khavatar.png" alt="" />
          </div>
          <div className="h-full w-full text-left lg:w-1/2 uppercase">
            <h1 className={`font-bold ${slabo.className}`}>
              Hi, I'm{" "}
              <span className="text-ship-cove-700 font-extrabold">Khalid</span>
            </h1>
            <div className="flex flex-col lg:flex-row sm:items-start xl:items-center gap-5">
              <h2 className={`font-bold animate-character ${khula.className}`}>
                Full Stack Web Developer
              </h2>
              <div className="animate-bounce hidden xl:block">
                <a href="#about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
