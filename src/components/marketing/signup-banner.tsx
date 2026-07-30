import { Alert } from "flowbite-react";

export function SignupBanner() {
  return (
    <Alert color="failure" className="w-full rounded-none justify-center">
      Signups are temporarily paused as we prepare for launch — existing accounts can still sign in.
    </Alert>
  );
}