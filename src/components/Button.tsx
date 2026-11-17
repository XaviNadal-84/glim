
import "./Button.css";

type ButtonProps = {
  variant?: "Primary" | "Secondary" | "Tertiary";
  size?: "XL" | "LG" | "MD" | "SM";
  state?: "Default" | "Disabled";
  label: string;
};

export function Button({
  variant = "Primary",
  size = "MD",
  state = "Default",
  label,
}: ButtonProps) {
  const isDisabled = state === "Disabled";

  return (
    <button
      className={[
        "button",
        `button--${variant.toLowerCase()}`,
        `button--${size.toLowerCase()}`,
      ].join(" ")}
      disabled={isDisabled}
      type="button"
    >
      {label}
    </button>
  );
}

