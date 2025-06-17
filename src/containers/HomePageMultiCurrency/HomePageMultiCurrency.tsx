import { IMAGES } from "@/utils/images";
import Image from "next/image";
import classes from "./HomePageMultiCurrency.module.css";

const HomePageMultiCurrency = () => {
  return (
    <section className={classes.container}>
      <div>
        <h3>Multi-currency Wallets</h3>
        <p>
          Facilitate effortless management of multiple wallets, each dedicated
          to a specific currency, streamlining transactions and storage across
          various currencies.
        </p>
        <p>
          Enhance user experience with tailored wallets for different
          currencies, empowering efficient financial management and flexibility
          in global transactions
        </p>
      </div>
      <div>
        <Image src={IMAGES.iPhone} alt="iPhone" width={432} height={836} />
        <Image src={IMAGES.usd} alt="usd" width={328} height={180} />
        <Image src={IMAGES.cad} alt="cad" width={328} height={180} />
        <Image src={IMAGES.gha} alt="gha" width={328} height={180} />
        <Image src={IMAGES.ngn} alt="ngn" width={328} height={180} />
      </div>
      <div>
        <Image src={IMAGES.girl} alt="girl" width={414} height={788} />
      </div>
    </section>
  );
};

export default HomePageMultiCurrency;
