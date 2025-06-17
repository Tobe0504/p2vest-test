import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/images";
import Image from "next/image";
import classes from "./HomePageShopOnline.module.css";

const HomePageShopOnline = () => {
  return (
    <section className={classes.container}>
      <div>
        <h3>Shop Online</h3>
        <p>
          Experience the world at your fingertips with our seamless online
          shopping platform.{" "}
        </p>
        <p>
          From the latest fashion trends to must-have gadgets, shop the world's
          best brands and products from the comfort of your own home.
        </p>
        <p>Get Revve on your phone</p>

        <Button>Download the app</Button>
      </div>
      <div>
        <Image src={IMAGES.iPhoneAsos} alt="Asos" width={432} height={836} />
      </div>
      <div>
        <Image src={IMAGES.productImage1} alt="Asos" width={120} height={792} />
        <Image src={IMAGES.productImage2} alt="Asos" width={120} height={792} />
        <Image src={IMAGES.productImage3} alt="Asos" width={256} height={792} />
      </div>
    </section>
  );
};

export default HomePageShopOnline;
