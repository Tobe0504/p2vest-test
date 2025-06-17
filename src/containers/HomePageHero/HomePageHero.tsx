"use client";

import { useEffect, useState } from "react";
import { IMAGES } from "@/utils/images";
import HomePageHeroIntro from "../HomePageHeroIntro/HomePageHeroIntro";
import HomePageHeroDetails from "../HomePageHeroDetails/HomePageHeroDetails";
import classes from "./HomePageHero.module.css";

const HomePageHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasSlidDown, setHasSlidDown] = useState(false);

  const heroCarouselItems = [
    {
      flag: IMAGES.canada,
      title: "Canada",
      debitPrice: "+C$750",
      backgroundImage: IMAGES.heroBg1,
      debitDate: "Yesterday, 1:28 AM",
      debitDescription: "Transfer to Lil Sis",
      debitAmount: "-₦862,912.94",
    },
    {
      flag: IMAGES.ghana,
      title: "Ghana",
      debitPrice: "+₵3,920",
      backgroundImage: IMAGES.heroBg2,
      debitDate: "Today, 9:45 AM",
      debitDescription: "Online transaction",
      debitAmount: "-C$440.11",
    },
    {
      flag: IMAGES.nigeria,
      title: "Nigeria",
      debitPrice: "-₦98,000",
      backgroundImage: IMAGES.heroBg3,
      debitDate: "Today, 11:28 AM",
      debitDescription: "Paid at KFC",
      debitAmount: "-₵760.87",
    },
    {
      flag: IMAGES.nigeria,
      title: "Nigeria",
      debitPrice: "-₦17,000",
      backgroundImage: IMAGES.heroBg4,
      debitDate: "Today, 3:15 PM",
      debitDescription: "Airtime top-up",
      debitAmount: "+₦17,000",
    },
  ];

  const total = heroCarouselItems.length;

  const goTo = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const goNext = () => {
    goTo((currentIndex + 1) % total);
  };

  const goPrev = () => {
    goTo((currentIndex - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keysToHandle = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];
      if (keysToHandle.includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowRight":
          goNext();
          break;
        case "ArrowLeft":
          goPrev();
          break;
        case "ArrowDown":
          setHasSlidDown(true);
          break;
        case "ArrowUp":
          setHasSlidDown(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const active = heroCarouselItems[currentIndex];
  const next = heroCarouselItems[(currentIndex + 1) % total];

  return (
    <div className={classes.heroContainer}>
      <div
        className={`${classes.detailsWrapper} ${
          hasSlidDown ? classes.slideOutUp : classes.slideInDown
        }`}
      >
        <HomePageHeroDetails
          active={active}
          isAnimating={isAnimating}
          next={next}
        />
      </div>

      <div
        className={`${classes.introWrapper} ${
          hasSlidDown ? classes.slideInUp : classes.slideOutDown
        }`}
      >
        <HomePageHeroIntro activeImage={active.backgroundImage} />
      </div>
    </div>
  );
};

export default HomePageHero;
