import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const LandingImages = ({
  firstImageSrc = "https://assets.aceternity.com/screenshots/4.jpg",
  secondImageSrc = "https://assets.aceternity.com/screenshots/3.jpg",
  showGradient = true,
}) => {
  return (
    <div className="relative">
      <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-20 perspective-distant translate-x-10 md:translate-x-28">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="perspective-[4000px] shadow-2xl"
        >
          <img
            src={firstImageSrc}
            alt="Dashboard screenshot 1"
            draggable={false}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl select-none pointer-events-none"
            )}
            style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="perspective-[4000px] translate-x-20 -translate-y-10 md:-translate-y-20 lg:-translate-y-40"
        >
          <img
            src={secondImageSrc}
            alt="Dashboard screenshot 2"
            draggable={false}
            className={cn(
              "absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none pointer-events-none"
            )}
            style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
