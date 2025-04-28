"use client";
import Link from "next/link";

interface ButtonProps {
  label: string;
  link?: string;
  type: "link" | "button";
  disabled?: boolean;
  openInNew?: boolean;
  onClick?: () => void;
  pageWaiting?: boolean;
  setPageWaiting?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Loading Spinner for pages waiting
const Spinner = () => (
  <svg
    // width="26"
    // height="26"
    className="aspect-square size-full"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity=".25"
      fill="#01e0f4"
    />
    <path
      fill="#01e0f4"
      d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="0.75s"
        values="0 12 12;360 12 12"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export function Button({
  label,
  link,
  type = "link",
  disabled = false,
  openInNew = false,
  onClick,
  pageWaiting = false,
  setPageWaiting,
}: ButtonProps) {
  if (!label) return null;

  if (type === "button") {
    return (
      <div className="group from-forge-light-blue to-forge-dark-blue hover:from-forge-gradient-from hover:to-forge-gradient-to w-fit rounded-full bg-gradient-to-r p-[2px] transition-all duration-75 hover:scale-[102%] active:scale-[98%]">
        <button
          className="group-hover:bg-forge-dark-navy relative z-10 grid w-fit grid-cols-1 grid-rows-1 items-center justify-center rounded-full bg-transparent px-8 py-4"
          type="submit"
          aria-label="functional button"
          onClick={() => {
            if (setPageWaiting) {
              setPageWaiting(true);
            }
            if (onClick) {
              onClick();
            }
          }}
          disabled={disabled}
        >
          <span
            className={`${pageWaiting ? "opacity-100" : "opacity-0"} col-start-1 row-start-1 mx-auto flex size-6 grid-cols-1 grid-rows-1 items-center justify-center`}
          >
            <Spinner />
          </span>

          <span
            className={`${pageWaiting ? "opacity-0" : "opacity-100"} font-copy col-start-1 row-start-1 flex grid-cols-1 grid-rows-1 items-center justify-center text-center text-[20px] leading-[24px] font-bold text-nowrap transition-all duration-100 group-active:scale-[95%]`}
          >
            {label}
          </span>
        </button>
      </div>
    );
  }

  if (!link) {
    return null;
  }

  return (
    <div className="group from-forge-light-blue to-forge-dark-blue hover:from-forge-gradient-from hover:to-forge-gradient-to w-fit rounded-full bg-gradient-to-r p-[2px] transition-all duration-75 hover:scale-[102%] active:scale-[98%]">
      <Link
        href={link}
        aria-label="Link Button"
        className="group-hover:bg-forge-dark-navy relative z-10 flex w-fit items-center justify-center rounded-full bg-transparent px-8 py-4"
        onClick={(e) => {
          if (openInNew) {
            e.preventDefault();
            window.open(link, "_blank");
          }
        }}
        scroll
      >
        <div className="">
          <div className="text-button">{label}</div>
        </div>
      </Link>
    </div>
  );
}
