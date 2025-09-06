// import logo from "./tanim/jpg";
import Advantage from "./Advantage";
import heroImg from "../../public/assets/images/earth.jpg"

const Hero = () => {
  return (
    <div>
      <section className="relative hero-background  overflow-hidden  text-white">
        {/* Circle Overlay Background */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#ffea00]/10 blur-3xl -top-40 -left-40"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00ff9d]/10 blur-3xl top-1/2 -right-40"></div>
          <div className="absolute w-[700px] h-[700px] rounded-full bg-[#0066ff]/10 blur-3xl -bottom-40 -left-20"></div>
        </div>

        <div className="relative container flex flex-col-reverse lg:flex-row items-center justify-between mx-auto px-6 sm:px-12 lg:px-16 py-12 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col text-center lg:text-left max-w-lg lg:max-w-xl space-y-4">
            <p className="text-[#ffe600] font-bold text-3xl sm:text-4xl">
              Hello,
            </p>
            <h1 className="text-5xl text-white sm:text-6xl md:text-6xl font-extrabold leading-tight">
              I am Tanim.
            </h1>
            <p className="font-bold text-xl sm:text-2xl text-[#59c279]">
              Front Web Designer
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Must explain to how all this mistaken idea denouncing pleasure
              pain the system and expound the actua.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="px-6 py-3 text-lg font-semibold border rounded-lg border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="px-6 py-3 text-lg font-semibold bg-yellow-400 rounded-lg text-black hover:bg-yellow-300 transition"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center mb-10 lg:mb-0">
            <img
              // src={heroImg} //image dmu pore
              alt="Hero Illustration"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] object-contain"
            />
          </div>
        </div>
      </section>
      <div>
        {/* <Advantage /> */}
      </div>
    </div>
  );
};

export default Hero;
