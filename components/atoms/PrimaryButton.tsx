"use client";

/**
 * Reusable Button component that can be used as either a clickable button or a link.
 * This component provides a flexible way to display a button with a label, and optionally, it can link to another page or trigger an action when clicked.
 *
 * @param {string} label - The text label to display on the button (required).
 * @param {string} [link] - The URL to navigate to when the button is used as a link (optional).
 * @param {("link" | "button")} type - Determines if the component is rendered as a button or a link. Default is "link".
 * @param {boolean} [disabled=false] - Disables the button or link if set to true. Default is false.
 * @param {boolean} [openInNew=false] - If true, opens the link in a new tab. Only applies when `type="link"`. Default is false.
 * @param {() => void} [onClick] - A callback function to execute when the button is clicked. Only applies when `type="button"`.
 * @param {boolean} [pageWaiting=false] - A boolean to indicate whether the page is in a loading/waiting state (used for showing a spinner).
 * @param {boolean} [setBack=false] - If true, applies a different background color for the button, otherwise defaults to the standard button style.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} [setPageWaiting] - A setter function to control the `pageWaiting` state, which is used to show/hide a spinner.
 *
 * @returns {JSX.Element | null} - Returns a button or link element, depending on the `type` prop. If `label` is not provided, returns null.
 *
 * Usage Example:
 * - For a button:
 *    <Button label="Submit Form" type="button" onClick={handleSubmit} pageWaiting={loading} setPageWaiting={setloading}  />
 *
 * - For a link:
 *    <Button label="Go to Page" type="link" link="https://example.com" openInNew={true} />
 *
 * Notes:
 * - If `type` is "button", a spinner is shown when the `pageWaiting` prop is true.
 * - The button can optionally be disabled and will not trigger the `onClick` handler when in this state.
 * - The link behavior can open in a new tab if `openInNew` is set to true.
 * - The `setBack` prop can be used show a different styling to set the button back from other buttons - ie: in a tabs array.
 */

import Link from "next/link";

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

// typescript annotations
interface ButtonProps {
  label: string;
  link?: string;
  type: "link" | "button";
  disabled?: boolean;
  openInNew?: boolean;
  onClick?: () => void;
  pageWaiting?: boolean;
  setPageWaiting?: React.Dispatch<React.SetStateAction<boolean>>;
  setBack?: boolean;
}

export function Button({
  label,
  link,
  type = "link",
  disabled = false,
  openInNew = false,
  onClick,
  pageWaiting = false,
  setPageWaiting,
  setBack = false,
}: ButtonProps) {
  if (!label) return null;

  if (type === "button") {
    return (
      <div
        className={`${setBack ? "bg-forge-navy-highlight" : "from-forge-light-blue to-forge-dark-blue bg-gradient-to-r"} group hover:from-forge-gradient-from hover:to-forge-gradient-to w-fit rounded-full p-[2px] transition-all duration-75 hover:scale-[102%] hover:bg-gradient-to-r active:scale-[98%]`}
      >
        <button
          className={`${setBack ? "bg-forge-dark-navy" : "bg-transparent"} group-hover:bg-forge-dark-navy relative z-10 grid w-fit grid-cols-1 grid-rows-1 items-center justify-center rounded-full bg-transparent px-8 py-4`}
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
