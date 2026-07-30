import { Alert } from "flowbite-react";

export function SignupBanner() {
  return (
    <Alert
      color="failure"
      className="w-full justify-center rounded-none border-y border-destructive/30 bg-destructive/10 text-center text-destructive"
    >
      Signups are temporarily paused as we prepare for launch — existing accounts can still sign in.
    </Alert>
  );
}