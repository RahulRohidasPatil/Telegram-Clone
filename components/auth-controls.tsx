"use client"

import {
  ClerkLoaded,
  ClerkLoading,
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"
import { Spinner } from "./ui/spinner"

export default function AuthControls() {
  return (
    <>
      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
      <ClerkLoaded>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </ClerkLoaded>
    </>
  )
}
