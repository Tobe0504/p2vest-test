"use client";

import classes from "../containers/HomePageHeroIntro/HomePageHeroIntro.module.css";
import { IMAGES } from "@/utils/images";
import Image from "next/image";

import React from "react";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/routes";

const NotFound = () => {
  // Router
  const router = useRouter();
  return (
    <section className={classes.container}>
      <div>
        <Image
          src={IMAGES.heroBg1}
          alt="The page you are looking for is unavailable "
          width={424}
          height={493}
        />
      </div>

      <h1>The page you are looking for is unavailable </h1>

      <Image src={IMAGES.homeNaira} alt="Naira" width={152} height={152} />
      <Image src={IMAGES.homeSend} alt="Naira" width={152} height={152} />
      <Image src={IMAGES.homeUser1} alt="Naira" width={152} height={182} />
      <Image src={IMAGES.homeUser2} alt="Naira" width={192} height={280} />

      <div className={classes.send}>Send</div>
      <div className={classes.send}>Send</div>
      <Button
        style={{ marginTop: "2rem" }}
        onClick={() => router.push(ROUTES.BASE_URL)}
      >
        Return
      </Button>
    </section>
  );
};

export default NotFound;
