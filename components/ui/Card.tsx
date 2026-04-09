import clsx from "clsx";
import { ReactNode } from "react";

interface Props {

  children: ReactNode;

  className?: string;

  padding?: boolean;

}

export default function Card({

  children,

  className,

  padding = true

}: Props) {

  return (

    <div

      className={clsx(

        "uiCard",

        padding && "cardPadding",

        className

      )}

    >

      {children}

    </div>

  );

}