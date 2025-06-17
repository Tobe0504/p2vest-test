"use client";

import Location from "@/assets/svgicons/Location";
import Message from "@/assets/svgicons/Message";
import Phone from "@/assets/svgicons/Phone";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { IMAGES } from "@/utils/images";
import Image from "next/image";
import { useState } from "react";
import classes from "./HomePageGetInTouch.module.css";

const contact = [
  {
    icon: <Phone />,
    value: "+1(343)338-5190",
    type: "tel",
  },
  {
    icon: <Message />,
    value: "hello@revveme.com",
    type: "mailto",
  },
  {
    icon: <Location />,
    value: "2482 Yonge St Toronto ON M4P 2H5",
    type: "location",
  },
];

const HomePageGetInTouch = () => {
  // States
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  return (
    <section className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <h3>Get in touch</h3>

          <p>
            Do you have any questions or feedback?We'd love to hear from you.
          </p>

          {contact.map((data) => {
            if (data?.type === "tel") {
              return (
                <div className={classes.info} key={data?.value}>
                  <span>{data?.icon}</span>
                  <a href={`tel:${data?.value}`}>{data?.value}</a>
                </div>
              );
            }

            if (data?.type === "mailto") {
              return (
                <div className={classes.info} key={data?.value}>
                  <span>{data?.icon}</span>
                  <a href={`mailto:${data?.value}`}>{data?.value}</a>
                </div>
              );
            } else {
              return (
                <div className={classes.info} key={data?.value}>
                  <span>{data?.icon}</span>
                  <a href={`#0`}>{data?.value}</a>
                </div>
              );
            }
          })}
        </div>

        <form className={classes.form}>
          <Input
            label="Fullname"
            placeholder="Firstname Lastname"
            name="fullName"
            onChange={(e) => inputChangeHandler(e, setFormData)}
            value={formData.fullName}
          />
          <Input
            label="Email address"
            placeholder="johndoe@mail.com"
            name="email"
            onChange={(e) => inputChangeHandler(e, setFormData)}
            value={formData.email}
          />
          <TextArea
            label="Message"
            name="message"
            onChange={(e) => inputChangeHandler(e, setFormData)}
            value={formData.message}
          />

          <Button
            type="secondary"
            disabled={
              !formData?.email || !formData?.fullName || !formData?.message
            }
          >
            Send message
          </Button>
        </form>
      </div>

      <Image src={IMAGES.chatImage} alt="Chat" width={270} height={264} />
      <Image src={IMAGES.phoneImage} alt="Phone" width={288} height={286} />
      <Image src={IMAGES.mailImage} alt="Mail" width={297} height={238} />
    </section>
  );
};

export default HomePageGetInTouch;
