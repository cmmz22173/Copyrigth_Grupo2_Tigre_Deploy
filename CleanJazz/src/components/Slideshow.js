import React from "react";
import HeroSlider, { Slide } from "hero-slider";

const sample1 =
  "https://res.cloudinary.com/dwozn2lvh/image/upload/v1678476893/Tigre/1_hyawos.png";
const sample2 =
  "https://res.cloudinary.com/dwozn2lvh/image/upload/v1678476892/Tigre/2_jznjv4.png";
const sample3 =
  "https://res.cloudinary.com/dwozn2lvh/image/upload/v1678476888/Tigre/3_hb0xgk.png";

const Slidershow = () => {
  return (
    <HeroSlider
      height={"85vh"}
      width={"203.5vh"}
      autoplay
      slidingAnimation="left_to_right"
      orientation="horizontal"
      style={{
        backgroundColor: "rgba(0,0,0,0.33)",
      }}
      settings={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5,
        height: "75vh",
        onBeforeChange: (previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide),
        onChange: (nextSlide) => console.log("onChange", nextSlide),
        onAfterChange: (nextSlide) => console.log("onAfterChange", nextSlide),
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: sample1,
          backgroundAttachment: "fixed",
        }}
        Slide
      />

      <Slide
        background={{
          backgroundImageSrc: sample2,
          backgroundAttachment: "fixed",
        }}
        Slide
      />

      <Slide
        background={{
          backgroundImageSrc: sample3,
          backgroundAttachment: "fixed",
        }}
        Slide
      />
    </HeroSlider>
  );
};

export default Slidershow;
