"use client";
import { Language } from "@/i18n/settings";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  changeLangTo?: Language;
}

export const Link = ({ href, changeLangTo, ...props }: LinkProps) => {
  const pathName = usePathname();
  const [_, lang] = pathName.split("/");
  return <NextLink href={`/${changeLangTo ?? lang}${href}`} {...props} />;
};
