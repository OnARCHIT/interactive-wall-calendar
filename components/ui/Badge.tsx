import clsx from "clsx";
import { ReactNode } from "react";

interface Props {

  children: ReactNode;

  variant?: "default" | "holiday" | "range";

}

export default function Badge({

  children,

  variant = "default"

}: Props) {

  return (

    <span

      className={clsx(

        "uiBadge",

        `badge-${variant}`

      )}

    >

      {children}

    </span>

  );

}
