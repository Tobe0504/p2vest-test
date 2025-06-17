import ArrowLeft from "@/assets/svgicons/ArrowLeft";
import ArrowRight from "@/assets/svgicons/ArrowRight";
import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/images";
import Image from "next/image";
import classes from "./HomePageHeroDetails.module.css";
import { imageCarouselTypes } from "@/utils/types";

type HomePageHeroDetailsTypes = {
  active: imageCarouselTypes;
  isAnimating: boolean;
  next: imageCarouselTypes;
};

const HomePageHeroDetails = ({
  active,
  isAnimating,
  next,
}: HomePageHeroDetailsTypes) => {
  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${active.backgroundImage})` }}
    >
      <div className={classes.topSection}>
        <Image src={IMAGES.logo} alt="Logo" width={120} height={120} />
        <h1>Send. Shop. Spend</h1>
        <Image src={IMAGES.controls} alt="Controls" height={76} width={48} />
      </div>

      <div
        className={`${classes.bodySection} ${
          isAnimating ? classes.animate : ""
        }`}
      >
        <div>
          <h2>{active.title}</h2>
          <ArrowRight />
          <p>
            Seamlessly bridge distances with our effortless remittance service.
            Send support, and financial care to your loved ones back home.
          </p>
        </div>
        <div className={classes.middleSection}>
          <div>
            <h3>{active.debitPrice}</h3>
            <div>
              <Image
                src={active.flag}
                alt={active.title}
                width={52}
                height={52}
              />
            </div>
          </div>

          <div>
            <Image src={IMAGES.absaLogo} alt="Canada" width={32} height={32} />
            <div>
              <p>{active.debitDate}</p>
              <p>{active.debitDescription}</p>
            </div>
            <p>{active.debitAmount}</p>
          </div>
        </div>
        <div>
          <h2>{next.title}</h2>
          <ArrowLeft />
          <p>Get Revve on your phone</p>
          <Button type="bordered">Download the app</Button>
        </div>
      </div>

      <div className={classes.overlay}></div>
    </section>
  );
};

export default HomePageHeroDetails;
