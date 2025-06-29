import React from "react";
import CategoryItem from "./CategoryItems";

const Category: React.FC = () => {
  const icons = [
    {
      src: "/category/construction.jpg",
      href: "/search?q=site-safety",
      viewBox: "0 0 54 57",
      width: "54",
      height: "57",
      d: "M2.01183 56.0073C1.51172 41.5077 17.0118 44.0071 20.0118 44.007M20.0118 44.007C20.1917 44.007 23.1268 46.3568 27.5118 46.449C31.0117 46.449 34.0117 44.007 34.0117 44.007M20.0118 44.007L21.5117 38.0073M34.0117 44.007C34.0117 44.007 52.5117 41.5073 51.5118 56.0073M34.0117 44.007L32.0117 38.0073M21.5117 38.0073H32.0117M21.5117 38.0073C17.0117 36.5078 15.5117 27.1131 15.5117 21.666M32.0117 38.0073C35.0117 35.0078 37.9117 31.666 37.5117 21.666M41.5117 21.666C41.8451 14.9993 39.0117 2.38554 26.5117 2.00728C14.5117 1.64415 10.8451 14.9995 11.5117 21.6661M41.5117 21.666H15.5117M41.5117 21.666H43.7358M11.5117 21.6661L15.5117 21.666M11.5117 21.6661H9.51172",
    },
    {
      src: "/category/equipments.jpg",
      href: "/search?q=hardware",
      viewBox: "0 0 49 43",
      width: "49",
      height: "43",
      d: "M47.5 6.5L40.8004 11.106C39.9863 11.6656 39.5 12.5902 39.5 13.5781V16M29.5 34.5L36.2047 40.199C37.5037 41.3031 39.5 40.3799 39.5 38.6751V24M29.5 34.5H20.5M29.5 34.5L39.5 24M20.5 34.5C20.5 36.6667 18.3 41.5 13.5 41.5C8.7 41.5 5.99971 37.5 6 34.5C6.00025 31.9505 7.4792 27 13.5 27C18 27 20.5 31.5 20.5 34.5ZM8.5 29L2.53441 22.5755C2.19091 22.2056 2 21.7194 2 21.2146V16H6.5M39.5 16V24M39.5 16H32.5M6.5 16V12.8893C6.5 12.3089 6.66397 11.7402 6.9972 11.265C9.44267 7.77767 14.6591 2 19.5 2C24.3409 2 29.5573 7.77767 32.0028 11.265C32.336 11.7402 32.5 12.3089 32.5 12.8893V16M6.5 16H32.5",
    },
    {
      src: "/category/Facilites.jpg",
      href: "/search?q=building-materials",
      viewBox: "0 0 50 46",
      width: "50",
      height: "46",
      d: "M6 15.0625V44H17.5V25.5H31.5V44H43.5V15.7766L48.5 19.5L25 2L1 18.5",
    },
    {
      src: "/category/human captial.jpg",
      href: "/search?q=human-captial",
      viewBox: "0 0 51 44",
      width: "51",
      height: "44",
      d: "M2 44V40C2 35.0294 6.02944 31 11 31H26.5C31.4706 31 35.5 35.0294 35.5 40V44M39 31H40C44.9706 31 49 35.0294 49 40V44M32 2C35.5 2 42 4.3 42 11.5C42 18.7 35.5 21 32 21M18.5 2C24 2 28 6.5 28 11.5C28 16.5 24.5 21 18.5 21C12.5 21 9 16.5 9 11.5C9 6.5 13 2 18.5 2Z",
    },
    {
      src: "/category/marketing.jpg",
      href: "/search?q=marketing",
      viewBox: "0 0 46 46",
      width: "46",
      height: "46",
      d: "M17 34.5H6C3.79086 34.5 2 32.7091 2 30.5V6C2 3.79086 3.79086 2 6 2H40.5C42.7091 2 44.5 3.79086 44.5 6V30.5C44.5 32.7091 42.7091 34.5 40.5 34.5H30M17 34.5L13.5 45M17 34.5H30M30 34.5L34 45M13 26.5V17.5M20 26.5V10M27 26.5V16M34.5 26.5V11.5",
    },
    {
      src: "/category/technology.jpg",
      href: "/search?q=technology",
      viewBox: "0 0 49 48",
      width: "49",
      height: "48",
      d: "M22 4.5H2V37.5H18.5M45 26.5V37.5H29M29 37.5V46.5H34H18.5M29 37.5H18.5M13 46.5H18.5M18.5 46.5V37.5M28 7V17.5L37.5 22.5M28 7L37.5 2L47 7M28 7L37.5 13M37.5 22.5L47 17.5V7M37.5 22.5V13M47 7L37.5 13",
    },
    {
      src: "/category/truck.png",
      href: "/search?q=road-construction",
      viewBox: "0 0 49 48",
      width: "51",
      height: "42",
      d: "M1 2H23.5V19.5M1 26H30V7M30 2V7M30 7H41.2567C42.6501 7 43.9432 7.72518 44.6698 8.9142L49 16M49 16V26M49 16H39.5V26H49M42 36.5H49V26M42 36.5C42 35.2789 41 33 38.5 33C36 33 35 35 35 36.5M42 36.5C42 38 41 40 38.5 40C36 40 35 38 35 36.5M35 36.5H9M9 36.5C9 35 7.9 33 5.5 33C3 33 2 34.6809 2 36.5C2 38 3 40 5.5 40C8 40 9 38 9 36.5Z",
    },
    {
      src: "/category/professional services.jpg",
      href: "/search?q=professional-services",
      viewBox: "0 0 57 40",
      width: "57",
      height: "40",
      d: "M0 4.5H9.5V11M0 33.5H9.5V28.5M9.5 28.5L20.4813 36.9472C21.6456 37.8428 23.2872 37.7636 24.3599 36.7601L26.7759 34.5M9.5 28.5V11M46 7L34.5122 2.58162C33.5685 2.21865 32.5054 2.35548 31.6844 2.94561L23.9565 8.5M46 7V4.5H56M46 7V29M56.5 33.5H46V29M9.5 11L17.5202 7.43546C18.1538 7.15387 18.8653 7.10043 19.5338 7.2842L23.9565 8.5M23.9565 8.5L19.8671 11.4393C18.3647 12.5192 18.1883 14.6883 19.4967 15.9967L21.9282 18.4282C22.8619 19.3619 24.2962 19.5753 25.4613 18.954L28.8987 17.1207C30.1293 16.4644 31.6498 16.7427 32.5682 17.7922L36.0891 21.8161C37.1546 23.0338 37.0624 24.8771 35.8808 25.9824L26.7759 34.5M26.7759 34.5L39.9628 29.2153C40.3177 29.0731 40.6964 29 41.0788 29H46",
    },
    {
      src: "/category/marketing.jpg",
      href: "/search?q=marketing",
      width: "46",
      height: "46",
      viewBox: "0 0 46 46",
      d: "M17 34.5H6C3.79086 34.5 2 32.7091 2 30.5V6C2 3.79086 3.79086 2 6 2H40.5C42.7091 2 44.5 3.79086 44.5 6V30.5C44.5 32.7091 42.7091 34.5 40.5 34.5H30M17 34.5L13.5 45M17 34.5H30M30 34.5L34 45M13 26.5V17.5M20 26.5V10M27 26.5V16M34.5 26.5V11.5",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2 md:gap-5">
      <div className="w-full flex gap-1 md:gap-5">
        <div className="w-1/3 bg-black h-28 rounded-full hidden md:flex items-center justify-center text-white border-2"></div>
        {icons.slice(0, 4).map((icon, index) => (
          <CategoryItem icon={icon} key={index} index={index} />
        ))}
        <div className="w-1/3 bg-black h-28 rounded-full hidden md:flex items-center justify-center text-white border-2"></div>
      </div>
      <div className="w-full flex gap-1 md:gap-5">
        <div className="w-1/3 bg-black h-28 rounded-full hidden md:flex items-center justify-center text-white border-2"></div>
        {icons.slice(5, 9).map((icon, index) => (
          <CategoryItem icon={icon} key={index} index={4 + index} />
        ))}
        <div className="w-1/3 bg-black h-28 rounded-full hidden md:flex items-center justify-center text-white border-2"></div>
      </div>
    </div>
  );
};

export default Category;