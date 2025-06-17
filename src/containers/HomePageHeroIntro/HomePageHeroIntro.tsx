import { IMAGES } from "@/utils/images";
import Image from "next/image";
import classes from "./HomePageHeroIntro.module.css";

type HomePageHeroIntroTypes = {
  activeImage: string;
};

const HomePageHeroIntro = ({ activeImage }: HomePageHeroIntroTypes) => {
  return (
    <section className={classes.container}>
      <div>
        <Image
          src={activeImage}
          alt="Send and Receive Money "
          width={424}
          height={493}
        />
        <p>
          Seamlessly bridge distances with our effortless remittance service.
          Send support, and financial care to your loved ones back home.
        </p>
      </div>

      <h1>Send and Receive Money </h1>

      <Image src={IMAGES.homeNaira} alt="Naira" width={152} height={152} />
      <Image src={IMAGES.homeSend} alt="Naira" width={152} height={152} />
      <Image src={IMAGES.homeUser1} alt="Naira" width={152} height={182} />
      <Image src={IMAGES.homeUser2} alt="Naira" width={192} height={280} />

      <div className={classes.send}>Send</div>
      <div className={classes.send}>Send</div>
    </section>
  );
};

export default HomePageHeroIntro;
