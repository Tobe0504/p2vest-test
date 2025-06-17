import Footer from "@/containers/Footer/Footer";
import classes from "./MainLayout.module.css";

type MainLayoutTypes = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutTypes) => {
  return (
    <main className={classes.container}>
      <section className={classes.body}>{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
