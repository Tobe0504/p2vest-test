import HomePageFaqs from "../HomePageFaqs/HomePageFaqs";
import HomePageGetInTouch from "../HomePageGetInTouch/HomePageGetInTouch";
import HomePageHero from "../HomePageHero/HomePageHero";
import HomePageMultiCurrency from "../HomePageMultiCurrency/HomePageMultiCurrency";
import HomePagePayBills from "../HomePagePayBills/HomePagePayBills";
import HomePageShopOnline from "../HomePageShopOnline/HomePageShopOnline";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <section>
      <HomePageHero />
      <HomePageMultiCurrency />
      <HomePageShopOnline />
      <HomePagePayBills />
      <HomePageFaqs />
      <HomePageGetInTouch />
    </section>
  );
};

export default Homepage;
