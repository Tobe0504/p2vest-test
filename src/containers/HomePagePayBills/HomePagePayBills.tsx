import Button from "@/components/Button/Button";
import { IMAGES } from "@/utils/images";
import Image from "next/image";
import classes from "./HomePazgePayBills.module.css";

const HomePagePayBills = () => {
  return (
    <section className={classes.container}>
      <h3>Pay Bills</h3>
      <p>
        Say goodbye to long queues and endless processes—our platform offers a
        seamless solution for paying bills instantly without any hiccups.
      </p>
      <p>Get Revve on your phone</p>

      <Button type="secondary">Coming soon</Button>

      <Image src={IMAGES.calendar} alt="Calendar" width={340} height={368} />
    </section>
  );
};

export default HomePagePayBills;
