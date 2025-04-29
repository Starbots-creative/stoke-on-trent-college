/**
 * Toggle Component
 *
 * A customizable toggle switch with animated sliding knob and gradient background.
 * Designed for use in various contexts like settings, feature toggles, or preferences.
 *
 * Props:
 * - `state` (boolean): Current state of the toggle (on/off).
 * - `handleChangeToggle` (function): Callback function to handle toggle state changes.
 * - `context` (string): A string to identify the toggle's purpose (used for accessibility and element IDs).
 *
 * Usage:
 * <Toggle state={isEnabled} handleChangeToggle={toggleHandler} context="notifications" />
 */

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
