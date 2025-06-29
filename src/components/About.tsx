import React from "react";
import Button from "./ui/button/Button";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="flex flex-col gap-3 ">
      <p className="text-4xl text-black">
        Welcome to My portfolio <br /> Here I document my explorations
      </p>
      <p className="text-base text-gray-500 pr-60">
        Welcome to my portfolio. Here, I document my journey and exploration in
        the world of design and development. What you&apos;ll find isn&apos;t just code or
        pixels, but a blend of creativity, curiosity, and craft — turning ideas
        into impactful digital experiences.
      </p>
      <div className="flex flex-row gap-2.5 py-3  w-full justify-start">
        <Button
          hoverColor="#1F6FD6"
          className="border-[#DDE3FF] shadow-blue-100"
          url="https://www.linkedin.com/in/anjith-b-2ba035241/"
        >
          <LinkedSvg />
          LinkedIn
        </Button>
        <Button
          hoverColor="#EB2F2F"
          className="border-[#FFDBDB] shadow-red-100"
          url="https://github.com/ANJITH-B"
        >
          Youtube
        </Button>
        <Button
          hoverColor="#000"
          className="border-gray-200 shadow-gray-100"
          url="https://github.com/ANJITH-B"
        >
          Github
        </Button>
      </div>
      <div className="w-full border-t-1 border-gray-100" />
    </section>
  );
};

const LinkedSvg = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4701 19.7917C27.469 21.8913 26.6339 23.9046 25.1485 25.3885C23.6631 26.8724 21.6491 27.7055 19.5494 27.7044C17.4498 27.7034 15.4366 26.8683 13.9527 25.3829C12.4687 23.8975 11.6357 21.8834 11.6367 19.7838C11.6378 17.6842 12.4729 15.671 13.9583 14.187C15.4437 12.7031 17.4577 11.87 19.5573 11.8711C21.657 11.8721 23.6702 12.7072 25.1541 14.1926C26.638 15.678 27.4711 17.6921 27.4701 19.7917ZM27.7076 33.5667H11.8742V83.125H27.7076V33.5667ZM52.7242 33.5667H36.9701V83.125H52.5659V57.1188C52.5659 42.6313 71.4471 41.2855 71.4471 57.1188V83.125H87.0825V51.7355C87.0825 27.3126 59.1367 28.223 52.5659 40.2167L52.7242 33.5667Z"
        fill="black"
      />
    </svg>
  );
};

export default About;
