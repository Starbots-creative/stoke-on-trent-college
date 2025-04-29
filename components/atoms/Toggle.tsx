export default function Toggle({ state, handleChangeToggle, context }) {
  return (
    <div>
      <button
        type="button"
        aria-label={`toggle ${context}`}
        id={`${context}-toggle`}
        onClick={() => handleChangeToggle()}
        className="bg-forge-navy-highlight h-6 w-11 items-center rounded-full"
      >
        <div
          className={`${state ? "translate-x-5" : "translate-x-1"} from-forge-gradient-from to-forge-gradient-to aspect-square size-5 transform rounded-full bg-gradient-to-r transition-transform duration-150`}
        ></div>
      </button>
    </div>
  );
}
