import Mouse from "@/assets/svgicons/Mouse";
import Button from "@/components/Button/Button";
import FaqComponent from "@/components/FaqComponent/FaqComponent";
import { FAQs } from "@/utils/faqs";
import classes from "./HomePageFaqs.module.css";

const HomePageFaqs = () => {
  return (
    <section className={classes.container}>
      <div className={classes.leftContainer}>
        <h3>FAQs</h3>
        <p>
          Here are some basic questions and answers to help you get started.
        </p>
        <p>Get Revve on your phone</p>
        <Button type="secondary">Download the app</Button>

        <div>
          <Mouse />
          <span>Point your mouse cursor here to continue scrolling</span>
        </div>
      </div>

      <ul className={classes.rightContainer}>
        {FAQs.map((data, i) => {
          return (
            <FaqComponent
              question={data?.question}
              answer={data?.answer}
              key={i}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default HomePageFaqs;
