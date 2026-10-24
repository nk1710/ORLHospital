"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper"; // Import the core
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

SwiperCore.use([SwiperCore.Autoplay]);

const logos = [
  { src: "/images/imageone.jpg", alt: "Image One" },
  { src: "/images/imagetwo.webp", alt: "Image Two" },
  { src: "/images/imagethree.webp", alt: "Image Three" },
  { src: "/images/imagefour.jpg", alt: "Image Four" },
  { src: "/images/imagefive.jpg", alt: "Image Five" },
  { src: "/images/imagesix.jpg", alt: "Image Six" },
  { src: "/images/imageseven.jpg", alt: "Image Seven" },
  { src: "/images/imageeight.webp", alt: "Image Eight" },
];

export default function ExperienceCarousel() {
  return (
    <section className="pt-8 md:pt-12 mb-8 mt-4">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionTitle title={'Specialized Experience'} subheading={''} textAlign={'center'}/>
        </motion.div>

        <Swiper
          loop={true}
          spaceBetween={40}
          slidesPerView={5}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center items-center"
              >
                <Image src={logo.src} alt={logo.alt} className="max-h-26 object-contain" width={300} height={200} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}