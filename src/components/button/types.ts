import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "large" | "medium" | "small";
  color?: "primary" | "secondary" | "gray" | "white_line" | "gray_line";
}
