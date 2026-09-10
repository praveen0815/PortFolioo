import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "header" | "footer";
};

export function Container({
  children,
  className,
  id,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("shell", className)}>
      {children}
    </Tag>
  );
}
