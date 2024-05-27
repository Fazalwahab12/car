import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <h1 className=" text-6xl text-black font-extrabold">
          WE’RE NOT JUST FOR DATING
        </h1>
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            {/* <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://via.placeholder.com/150"
              alt="blog"
            /> */}
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
          </div>
          <div className="p-6">
            {/* <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://via.placeholder.com/150"
              alt="blog"
            /> */}
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
          </div>
          <div className="p-6">
            {/* <Image
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://via.placeholder.com/150"
              alt="blog"
            /> */}
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Short headline.
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
