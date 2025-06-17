"use client";

import React, { useState } from "react";
import classes from "./FaqComponent.module.css";
import Plus from "@/assets/svgIcons/Plus";

type FaqComponentTypes = {
  question: string;
  answer: string;
};

const FaqComponent = ({ question, answer }: FaqComponentTypes) => {
  // States
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.container}>
      <div
        className={classes.question}
        onClick={() => {
          setIsActive((prevState) => !prevState);
        }}
      >
        <p>{question}</p>
        <Plus
          styles={
            isActive
              ? { transform: "rotate(-45deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <div
        className={classes.answer}
        style={isActive ? { maxHeight: "700px" } : { maxHeight: "0px" }}
      >
        <p dangerouslySetInnerHTML={{ __html: answer }}></p>
      </div>
    </div>
  );
};

export default FaqComponent;
