"use client";

import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

type SlideImage = {
  src: string | StaticImageData;
  alt: string;
  height?: number;
  width?: number;
};

type Props = {
  slides: SlideImage[];
};

export const SwiperComponent: FC<Props> = ({ slides }) => {
  const [slidesPerView, setSlidesPerView] = useState<1 | 2>(2);
  useEffect(() => {
    // Determine screen size and adjust slidesPerView
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
  });
  return (
    <Swiper
      wrapperClass="items-center"
      slidesPerView={slidesPerView}
      spaceBetween={20}
      modules={[Pagination, A11y, Autoplay]}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000 }}
    >
      {slides.map(({ src, alt, height, width }, index) => (
        <SwiperSlide key={index}>
          <div className="flex h-full w-full items-center justify-center pb-10 px-1">
            <Image
              src={src}
              alt={alt}
              className="block rounded-2xl overflow-hidden max-h-[500px] object-contain outline outline-1 outline-[rgba(0,200,255,.5)]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
