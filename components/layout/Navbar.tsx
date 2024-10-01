"use client";
import { UserButton, useAuth } from "@clerk/nextjs";

import React from "react";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggle";
import { NavMenu } from "../NavMenu";

const Navbar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <header className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <div className="flex items-center justify-between">
          <div
            className="flex gap-1 cursor-pointer items-center"
            onClick={() => router.push("/")}>
            <Image src="/logo.svg" alt="logo" width="30" height="30" />
            <div className="font-bold text-xl">StaySavvy</div>
          </div>
          <SearchInput />
          <div className="flex gap-3 items-center">
            <div>
              <ModeToggle />
              <NavMenu />
            </div>
            <UserButton />
            {!userId && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/sign-in")}>
                  Sign In
                </Button>
                <Button size="sm" onClick={() => router.push("/sign-up")}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
