/** @format */
import { useEffect, useState } from "react";
import one from "../public/assets/one.jpg";
import two from "../public/assets/two.jpg";
import three from "../public/assets/three.jpg";
import five from "../public/assets/five.jpg";
import six from "../public/assets/six.jpg";
import seven from "../public/assets/seven.png";
import eight from "../public/assets/eight.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import CarouselInfo from "./utils/CarouselInfo";

const Carousel = () => {
  const [value, setValue] = useState(0);

  const images = [one, two, three, five, six, seven, eight];
  const image = images[value];

  const len = images.length - 1;

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value === len ? 0 : value + 1);
    }, 5000);

    return () => clearInterval(slider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const next = () => {
    setValue(value === len ? 0 : value + 1);
  };
  const prev = () => {
    setValue(value < 1 ? len : value - 1);
  };
  return (
    <section className=' width h-fit z-20 relative'>
      <div className='absolute flex justify-between items-center top-0 right-0 bg-black w-full h-full z-50 bg-opacity-70 px-4 md:px-8'>
        <FaChevronLeft
          onClick={prev}
          className='text-lg md:text-4xl text-gray-300 cursor-pointer hover:scale-110 transition-all opacity-20 hover:opacity-90'
        />
        <CarouselInfo />
        <FaChevronRight
          onClick={next}
          className='text-lg md:text-4xl text-gray-300 cursor-pointer hover:scale-110 transition-all opacity-20 hover:opacity-90'
        />
      </div>
      <div className='hidden md:hidden lg:flex  '>
        <Image
          src={image}
          width={1440}
          height={400}
          objectFit='cover'
          layout='fixed'
          priority={true}
          alt='image'
        />
      </div>
      <div className='hidden md:flex lg:hidden  '>
        <Image
          src={image}
          width={1440}
          height={380}
          objectFit='cover'
          layout='fixed'
          priority={true}
          alt='image'
        />
      </div>
      <div className='flex md:hidden lg:hidden'>
        <Image
          src={image}
          width={1440}
          height={1300}
          objectFit='cover'
          alt='image'
        />
      </div>
    </section>
  );
};

export default Carousel;
