import Image from "next/image";

const Hero2 = () => {
  return (
    <div
      className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden"
      style={{ backgroundColor: "#FFC629" }}
    >
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left font-extrabold text-black leading-tight">
            There’s a better way to talk with your customers.
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email
            and live chat with a personal touch, and deliver help content right
            where your customers need it, all in one place, all for one low
            price.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md  bg-black text-white ">
              Get started
            </button>
          </div>
        </div>
        <div className="w-full p-16   md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="https://bumble.com/_next/image?url=%2Fbumble-brand-assets%2Flanding%2Fassets%2Fphotos%2Flanding-section-1.jpg&w=561&q=75"
            className="  rounded-2xl "
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
