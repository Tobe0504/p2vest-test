import classes from "./Button.module.css";
import React, { CSSProperties } from "react";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "bordered";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: React.ReactNode;
  id?: string;
  style?: CSSProperties;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  className,
  icon,
  id,
  style,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "bordered"
          ? classes.bordered
          : classes.primary
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      id={id}
      style={style}
    >
      {loading ? "Loading..." : children}
      {icon && <span className={classes.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
