import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="">
      Hello World{" "}
      <Image
        src={"/icons/facebook.svg"}
        alt={"test"}
        height={200}
        width={200}
      />
    </div>
  );
}
