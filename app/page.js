"use client";

import { useState } from "react";

import { Button } from "./components/atoms/PrimaryButton";

export default function LandingPage() {
  const [state, setState] = useState(false);
  return (
    <div className="">
      Hello World
      <Button
        type="button"
        label="testing"
        pageWaiting={state}
        setPageWaiting={setState}
      />
      <Button type="link" label="Find out more" link="/" />
    </div>
  );
}
