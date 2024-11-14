"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* ESQUERDA */}
      <div className="item-center flex gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        <Link
          href="/"
          className={
            pathName === "/" ? "my-auto font-bold text-primary" : "my-auto"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathName === "/transactions"
              ? "my-auto font-bold text-primary"
              : "my-auto"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathName === "/subscription"
              ? "my-auto font-bold text-primary"
              : "my-auto"
          }
        >
          Assinatura
        </Link>
      </div>
      {/* DIREITA AO CONTRÁRIO */}
      <UserButton showName />
    </nav>
  );
};

export default NavBar;
