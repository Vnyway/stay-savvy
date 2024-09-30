"use client";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

import React from "react";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div
          className="flex gap-1 cursor-pointer items-center"
          onClick={() => router.push("/")}>
          <Image src="/logo.svg" alt="logo" width="30" height="30" />
          <div className="font-bold text-xl">StaySavvy</div>
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <UserButton />
        </SignedOut>
      </Container>
    </header>
  );
};

export default Navbar;
