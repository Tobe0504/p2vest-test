import Facebook from "@/assets/svgicons/Facebook";
import Instagram from "@/assets/svgicons/Instagram";
import LinkedIn from "@/assets/svgicons/LinkedIn";
import Twitter from "@/assets/svgicons/Twitter";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import classes from "./Footer.module.css";

const content = [
  {
    url: "https:linkedin.com",
    content: <LinkedIn />,
  },

  {
    url: "https:facebook.com",
    content: <Facebook />,
  },
  {
    url: "https:twitter.com",
    content: <Twitter />,
  },
  {
    url: "https:instagram.com",
    content: <Instagram />,
  },
  {
    url: ROUTES.ABOUT_US,
    content: "About Us",
  },
  {
    url: ROUTES.PRIVACY_POLICY,
    content: "Privacy Policy",
  },
  {
    url: ROUTES.TERMS_OF_USE,
    content: "Terms of use",
  },
];

const Footer = () => {
  return (
    <footer className={classes.container}>
      {content.map((data) => {
        if (data?.url?.includes("https")) {
          return (
            <a href={data?.url} target="_blank" rel="noreferer" key={data?.url}>
              <span>{data?.content}</span>
            </a>
          );
        } else {
          return (
            <Link href={data?.url} key={data?.url}>
              <span>{data?.content}</span>
            </Link>
          );
        }
      })}
      <p>©2025 Revve. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
