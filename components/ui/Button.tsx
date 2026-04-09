"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;

  variant?: "primary" | "secondary" | "ghost";

  size?: "sm" | "md" | "lg";

}

export default function Button({

  children,

  variant = "primary",

  size = "md",

  className,

  ...props

}: Props) {

  return (

    <button

      {...props}

      className={clsx(

        "uiButton",

        `btn-${variant}`,

        `btn-${size}`,

        className

      )}

    >

      {children}

    </button>

  );

}